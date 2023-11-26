import { Injectable } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class NotificationService {
  constructor(private readonly twilioService: TwilioService | undefined) {
    SendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendNotification(
    email: string,
    phone: string,
    treatmentPlanId: string,
  ) {
    if (this.twilioService && phone) {
      console.log(`Send SMS to ${phone} with ${treatmentPlanId}`);
      await this.twilioService.client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone,
        body: `Your treatment plan has been updated! Check it here: http://localhost:5173/treatment-plans/${treatmentPlanId}`,
      });
    }
    if (process.env.SENDGRID_API_KEY && email) {
      console.log(
        `Send email to ${email} from ${process.env.SENDGRID_FROM_EMAIL} with ${treatmentPlanId}`,
      );
      const mail: SendGrid.MailDataRequired = {
        from: { name: 'OncoSync', email: process.env.SENDGRID_FROM_EMAIL },
        to: email,
        subject: 'Treatment plan updated!',
        text: `Your treatment plan has been updated! Check it here: http://localhost:5173/treatment-plans/${treatmentPlanId}`,
      };
      await SendGrid.send(mail);
    }
  }
}
