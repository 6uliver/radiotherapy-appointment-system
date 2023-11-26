import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TreatmentService } from './treatment.service';
import { TreatmentPlan } from './treatment-plan.entity';
import { Fraction } from './fraction.entity';
import { PatientService } from 'src/patient/patient.service';
import { Patient } from 'src/patient/patient.entity';
import { Constraints } from './constraints';

@Resolver(() => TreatmentPlan)
export class TreatmentPlanResolver {
  constructor(
    private treatmentService: TreatmentService,
    private patientService: PatientService,
  ) {}

  @ResolveField(() => [Fraction])
  async fractions(@Parent() treatmentPlan: TreatmentPlan) {
    return this.treatmentService.getFractionsForTreatmentPlan(treatmentPlan.id);
  }

  @ResolveField(() => Patient)
  async patient(@Parent() treatmentPlan: TreatmentPlan) {
    return this.patientService.getPatient(treatmentPlan.patientId);
  }

  @ResolveField(() => Constraints)
  async constraints(@Parent() treatmentPlan: TreatmentPlan) {
    const { transport, inpatient, largeBodied, breathHolding, kvImaging } =
      treatmentPlan;
    return {
      transport,
      inpatient,
      largeBodied,
      breathHolding,
      kvImaging,
    };
  }

  @Query(() => [TreatmentPlan])
  async searchTreatmentPlans(
    @Args('searchTerm', { type: () => String }) searchTerm: string,
  ) {
    return this.treatmentService.search(searchTerm);
  }

  @Query(() => TreatmentPlan)
  async treatmentPlanById(@Args('id', { type: () => ID }) id: string) {
    return this.treatmentService.getTreatmentPlan(id);
  }

  @Mutation(() => Boolean)
  async notifyPatient(@Args({ name: 'id', type: () => ID }) id: string) {
    return this.treatmentService.notifyPatient(id);
  }
}
