import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentPlan } from './treatment-plan.entity';
import { TreatmentService } from './treatment.service';
import { TreatmentPlanResolver } from './treatment-plan.resolver';
import { Fraction } from './fraction.entity';
import { FractionResolver } from './fraction.resolver';
import { PatientResolver } from './patient.resolver';
import { PatientModule } from 'src/patient/patient.module';
import { NotificationService } from './notification.service';
import { TwilioModule } from 'nestjs-twilio';

const hasTwillioConfig = !!process.env.TWILIO_ACCOUNT_SID;
const twilliModule = hasTwillioConfig
  ? [
      TwilioModule.forRoot({
        accountSid: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
      }),
    ]
  : [];

@Module({
  imports: [
    ...twilliModule,
    TypeOrmModule.forFeature([TreatmentPlan, Fraction]),
    PatientModule,
  ],
  controllers: [],
  providers: [
    TreatmentService,
    NotificationService,
    TreatmentPlanResolver,
    PatientResolver,
    FractionResolver,
  ],
  exports: [TreatmentService],
})
export class TreatmentModule {}
