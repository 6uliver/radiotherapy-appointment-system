import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentPlan } from './treatment-plan.entity';
import { TreatmentService } from './treatment.service';
import { TreatmentPlanResolver } from './treatment-plan.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([TreatmentPlan])],
  controllers: [],
  providers: [TreatmentService, TreatmentPlanResolver],
  exports: [TreatmentService],
})
export class TreatmentModule {}
