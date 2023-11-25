import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Patient } from 'src/patient/patient.entity';
import { TreatmentService } from './treatment.service';
import { TreatmentPlan } from './treatment-plan.entity';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(private treatmentService: TreatmentService) {}

  @ResolveField(() => [TreatmentPlan])
  async treatmentPlans(@Parent() patient: Patient) {
    return this.treatmentService.getTreatmentPlans(patient.id);
  }
}
