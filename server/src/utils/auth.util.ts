import crypto from 'crypto';

export const generateResetPasswordToken = async () => {
  const resetToken = crypto.randomBytes(32).toString('hex');
  const hashedResetToken = await crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  return {
    resetToken,
    hashedResetToken,
  };
};
