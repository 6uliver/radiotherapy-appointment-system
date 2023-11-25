import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TreatmentService } from './treatment.service';
import { TreatmentPlan } from './treatment-plan.entity';
import { Fraction } from './fraction.entity';

@Resolver(() => TreatmentPlan)
export class TreatmentPlanResolver {
  constructor(private treatmentService: TreatmentService) {}

  @ResolveField(() => [Fraction])
  async fractions(@Parent() treatmentPlan: TreatmentPlan) {
    return this.treatmentService.getFractionsForTreatmentPlan(treatmentPlan.id);
  }
}
