import { Query, Resolver } from '@nestjs/graphql';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(private patientService: PatientService) {}

  @Query(() => [Patient])
  async patients() {
    return this.patientService.getPatients();
  }
}
