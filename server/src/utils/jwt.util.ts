import JWT from 'jsonwebtoken';

export const signAccessToken = (userId: number) =>
  JWT.sign({ userId }, `${process.env.JWT_ACCESS_TOKEN_SECRET}`, {
    expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRES_IN}`,
  });

export const signRefreshToken = (userId: number) =>
  JWT.sign({ userId }, `${process.env.JWT_REFRESH_TOKEN_SECRET}`, {
    expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRES_IN}`,
  });

export const verifyRefreshToken = (
  refreshToken: string
): { userId: number } | null => {
  try {
    return JWT.verify(
      refreshToken,
      `${process.env.JWT_REFRESH_TOKEN_SECRET}`
    ) as {
      userId: number;
    };
  } catch (error: any) {
    return null;
  }
};
