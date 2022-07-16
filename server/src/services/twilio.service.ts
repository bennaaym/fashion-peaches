import twilio, { Twilio } from 'twilio';

class TwilioService {
  private client: Twilio;

  constructor() {
    this.client = twilio(
      `${process.env.TWILIO_ACCOUNT_SID}`,
      `${process.env.TWILIO_AUTH_TOKEN}`
    );
  }

  sendResetToken = async (
    resetToken: String,
    targetPhoneNumber: string
  ): Promise<boolean> => {
    try {
      const message = await this.client.messages.create({
        body: 'Fashion Peaches Password Reset Token',
        to: targetPhoneNumber,
        from: `${process.env.TWILIO_TRAIL_NUMBER}`,
      });
      console.log(message);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default new TwilioService();
