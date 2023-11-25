import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentPlan } from './treatment-plan.entity';
import { TreatmentService } from './treatment.service';
import { TreatmentPlanResolver } from './treatment-plan.resolver';
import { Fraction } from './fraction.entity';
import { FractionResolver } from './fraction.resolver';
import { PatientResolver } from './patient.resolver';
import { PatientModule } from 'src/patient/patient.module';

@Module({
  imports: [TypeOrmModule.forFeature([TreatmentPlan, Fraction]), PatientModule],
  controllers: [],
  providers: [
    TreatmentService,
    TreatmentPlanResolver,
    PatientResolver,
    FractionResolver,
  ],
  exports: [TreatmentService],
})
export class TreatmentModule {}
