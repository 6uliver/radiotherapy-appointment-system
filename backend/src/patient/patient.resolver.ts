import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Patient } from './patient.entity';
import { PatientsService } from './patient.service';
import { TreatmentService } from 'src/treatment/treatment.service';
import { TreatmentPlan } from 'src/treatment/treatment-plan.entity';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(
    private patientService: PatientsService,
    private treatmentService: TreatmentService,
  ) {}

  @Query(() => [Patient])
  async patients() {
    return this.patientService.getPatients();
  }

  @ResolveField(() => [TreatmentPlan])
  async treatmentPlans(@Parent() patient: Patient) {
    return this.treatmentService.getTreatmentPlans(patient.id);
  }
}
