import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { TreatmentPlan } from './treatment-plan.entity';
import { Fraction } from './fraction.entity';
import { PatientService } from 'src/patient/patient.service';

export class TreatmentService {
  constructor(
    @InjectRepository(TreatmentPlan)
    private treatmentPlanRepository: Repository<TreatmentPlan>,
    @InjectRepository(Fraction)
    private fractionRepository: Repository<Fraction>,
    private patientService: PatientService,
  ) {}

  async getTreatmentPlans(patientId: string) {
    return this.treatmentPlanRepository.findBy({ patientId });
  }

  async getFractionsForTreatmentPlan(id: string) {
    return this.fractionRepository.findBy({ treatmentPlanId: id });
  }

  async search(searchTerm: string) {
    const patients = await this.patientService.search(searchTerm);
    const patientIds = patients.map((patient) => patient.id);
    return this.treatmentPlanRepository.findBy({
      patientId: In(patientIds),
    });
  }

  async getTreatmentPlan(id: string) {
    return this.treatmentPlanRepository.findOneBy({ id });
  }
}
