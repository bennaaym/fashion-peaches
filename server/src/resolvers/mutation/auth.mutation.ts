import validator from 'validator';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import { UserType } from '@prisma/client';
import { IAuthResponse, IContext, ISignUp } from '../../types';

export const signAccessToken = (userId: number) =>
  JWT.sign({ userId }, `${process.env.JWT_ACCESS_TOKEN_SECRET}`, {
    expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRES_IN}`,
  });

export const signRefreshToken = (userId: number) =>
  JWT.sign({ userId }, `${process.env.JWT_REFRESH_TOKEN_SECRET}`, {
    expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRES_IN}`,
  });

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
      const accessToken = signAccessToken(newUser.id);
      const refreshToken = signRefreshToken(newUser.id);

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
};
