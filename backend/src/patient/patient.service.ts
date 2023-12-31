import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { Repository } from 'typeorm';

export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
  ) {}
  async getPatients() {
    return this.patientsRepository.find();
  }

  getPatient(id: string) {
    return this.patientsRepository.findOneBy({ id });
  }

  search(searchTerm: string) {
    return this.patientsRepository
      .createQueryBuilder('patient')
      .select()
      .where(
        'LOWER(CONCAT("patient"."firstName", \' \', "patient"."lastName")) LIKE LOWER(:searchTerm)',
        {
          searchTerm: `%${searchTerm}%`,
        },
      )
      .orWhere('"patient"."ssn" LIKE REPLACE(:searchTerm, \'-\', \'\')', {
        searchTerm: `%${searchTerm}%`,
      })
      .getMany();
  }
}
