import { Resolver } from '@nestjs/graphql';
import { TreatmentService } from './treatment.service';
import { TreatmentPlan } from './treatment-plan.entity';

@Resolver(() => TreatmentPlan)
export class TreatmentPlanResolver {
  constructor(private treatmentService: TreatmentService) {}
}
