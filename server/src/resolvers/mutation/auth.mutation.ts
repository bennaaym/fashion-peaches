import validator from 'validator';
import bcrypt from 'bcrypt';
import { UserType } from '@prisma/client';
import {
  IAuthResponse,
  IContext,
  IForgotPassword,
  IGenerateRefreshToken,
  ISignIn,
  ISignOut,
  ISignUp,
} from '../../types';
import { AUTH_UTIL, JWT_UTIL } from '../../utils';
import { TwilioService } from '../../services';

export const AuthMutation = {
  signUp: async (
    _: any,
    { username, phone, password, userType }: ISignUp,
    { prisma }: IContext
  ): Promise<IAuthResponse> => {
    try {
      // validate input
      const userNameExist = Boolean(
        await prisma.user.findUnique({
          where: { username },
        })
      );

      if (userNameExist) {
        return {
          tokens: null,
          errors: [{ message: 'Username already exist' }],
        };
      }

      const phoneExist = Boolean(
        await prisma.user.findUnique({ where: { phone } })
      );

      if (phoneExist) {
        return {
          tokens: null,
          errors: [{ message: 'Phone already exist' }],
        };
      }

      if (!validator.isMobilePhone(phone)) {
        return {
          tokens: null,
          errors: [{ message: 'Invalid phone number' }],
        };
      }

      if (!validator.isLength(password, { min: 8 })) {
        return {
          tokens: null,
          errors: [
            { message: 'Password must consist of 8 characters or more' },
          ],
        };
      }

      if (!validator.isLength(username, { min: 3 })) {
        return {
          tokens: null,
          errors: [{ message: 'Username must consist 3 characters or more' }],
        };
      }

      if (!Object.keys(UserType).includes(userType)) {
        return {
          tokens: null,
          errors: [{ message: 'Invalid user type' }],
        };
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // create a new user
      const newUser = await prisma.user.create({
        data: {
          username,
          phone,
          password: hashedPassword,
          userType,
        },
      });

      // generate tokens
      const accessToken = JWT_UTIL.signAccessToken(newUser.id);
      const refreshToken = JWT_UTIL.signRefreshToken(newUser.id);

      // save refresh token to db
      await prisma.user.update({
        where: {
          id: newUser.id,
        },
        data: {
          refreshToken,
        },
      });

      return {
        tokens: {
          access: accessToken,
          refresh: refreshToken,
        },
        errors: [],
      };
    } catch (error: any) {
      console.log(error);
      return {
        tokens: null,
        errors: [{ message: 'Internal server error' }],
      };
    }
  },

  signIn: async (
    _: any,
    { username, password }: ISignIn,
    { prisma }: IContext
  ): Promise<IAuthResponse> => {
    try {
      // check if a user with such username exist
      const user = await prisma.user.findUnique({ where: { username } });
      if (!user) {
        return {
          tokens: null,
          errors: [{ message: 'Invalid credentials' }],
        };
      }

      // if user exist match the input password with the hashed password in the db
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        return {
          tokens: null,
          errors: [{ message: 'Invalid credentials' }],
        };
      }

      // generate tokens
      const accessToken = JWT_UTIL.signAccessToken(user.id);
      const refreshToken = JWT_UTIL.signRefreshToken(user.id);

      // save refresh token to db
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshToken,
        },
      });

      return {
        tokens: {
          access: accessToken,
          refresh: refreshToken,
        },
        errors: [],
      };
    } catch (error: any) {
      console.log(error);
      return {
        tokens: null,
        errors: [{ message: 'Internal server error' }],
      };
    }
  },

  signOut: async (
    _: any,
    { refreshToken }: ISignOut,
    { prisma }: IContext
  ): Promise<IAuthResponse> => {
    try {
      const data = JWT_UTIL.verifyRefreshToken(refreshToken);

      if (!data) {
        return {
          tokens: null,
          errors: [{ message: 'Invalid refresh token' }],
        };
      }

      const user = await prisma.user.findUnique({
        where: {
          id: data.userId,
        },
      });

      if (!user || user?.refreshToken !== refreshToken) {
        return {
          tokens: null,
          errors: [{ message: 'Invalid refresh token' }],
        };
      }

      await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          refreshToken: '',
        },
      });

      return {
        tokens: null,
        errors: [],
      };
    } catch (error: any) {
      console.log(error);
      return {
        tokens: null,
        errors: [{ message: 'Internal server error' }],
      };
    }
  },

  generateRefreshToken: async (
    _: any,
    { refreshToken }: IGenerateRefreshToken,
    { prisma }: IContext
  ): Promise<IAuthResponse> => {
    try {
      const data = JWT_UTIL.verifyRefreshToken(refreshToken);

      if (!data) {
        return {
          tokens: null,
          errors: [{ message: 'Invalid refresh token' }],
        };
      }

      const user = await prisma.user.findUnique({
        where: {
          id: data.userId,
        },
      });

      if (!user || user?.refreshToken !== refreshToken) {
        return {
          tokens: null,
          errors: [{ message: 'Invalid refresh token' }],
        };
      }

      const accessToken = JWT_UTIL.signAccessToken(user.id);
      const newRefreshToken = JWT_UTIL.signRefreshToken(user.id);

      await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          refreshToken,
        },
      });

      return {
        tokens: {
          access: accessToken,
          refresh: newRefreshToken,
        },
        errors: [],
      };
    } catch (error: any) {
      console.log(error);
      return {
        tokens: null,
        errors: [{ message: 'Internal server error' }],
      };
    }
  },

  forgotPassword: async (
    _: any,
    { phone }: IForgotPassword,
    { prisma }: IContext
  ): Promise<IAuthResponse> => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          phone,
        },
      });
      if (!user) {
        return {
          tokens: null,
          errors: [{ message: 'Invalid phone number' }],
        };
      }

      //
      const { resetToken, hashedResetToken } =
        await AUTH_UTIL.generateResetPasswordToken();

      const tokenSentWithSuccess = await TwilioService.sendResetToken(
        resetToken,
        user.phone
      );

      if (!tokenSentWithSuccess) {
        return {
          tokens: null,
          errors: [
            {
              message:
                'Error occurred while sending password reset token, please try again!',
            },
          ],
        };
      }

      await prisma.user.update({
        where: { phone },
        data: { passwordResetToken: hashedResetToken },
      });

      return {
        tokens: null,
        errors: [],
      };
    } catch (error: any) {
      console.log(error);
      return {
        tokens: null,
        errors: [{ message: 'Internal server error' }],
      };
    }
  },
};
