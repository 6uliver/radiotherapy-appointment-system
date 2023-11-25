import { Query, Resolver } from '@nestjs/graphql';
import { Patient } from './patient.entity';
import { PatientsService } from './patient.service';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(private patientService: PatientsService) {}

  @Query(() => [Patient])
  async patients() {
    return this.patientService.getPatients();
  }
}
