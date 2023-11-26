import { ResolveField, Resolver } from '@nestjs/graphql';
import { TreatmentService } from './treatment.service';
import { Fraction } from './fraction.entity';
import { TreatmentPlan } from './treatment-plan.entity';

@Resolver(() => Fraction)
export class FractionResolver {
  constructor(private treatmentService: TreatmentService) {}

  @ResolveField(() => TreatmentPlan)
  async treatmentPlan(fraction: Fraction) {
    return this.treatmentService.getTreatmentPlan(fraction.treatmentPlanId);
  }
}
