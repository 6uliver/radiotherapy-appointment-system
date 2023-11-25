import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentPlan } from './treatment-plan.entity';
import { TreatmentService } from './treatment.service';
import { TreatmentPlanResolver } from './treatment-plan.resolver';
import { Fraction } from './fraction.entity';
import { FractionResolver } from './fraction.resolver';
import { PatientResolver } from './patient.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([TreatmentPlan, Fraction])],
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
