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
import { TwilioModule, TwilioService } from 'nestjs-twilio';
import { MachineResolver } from './machine.resolver';

const hasTwillioConfig = !!process.env.TWILIO_ACCOUNT_SID;
const twilliModule = hasTwillioConfig
  ? [
      TwilioModule.forRoot({
        accountSid: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
      }),
    ]
  : [];

const dummyTwillioProvider = hasTwillioConfig
  ? []
  : [{ provide: TwilioService, useValue: undefined }];

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
    MachineResolver,
    ...dummyTwillioProvider,
  ],
  exports: [TreatmentService],
})
export class TreatmentModule {}
