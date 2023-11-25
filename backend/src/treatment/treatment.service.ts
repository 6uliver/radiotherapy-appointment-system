import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TreatmentPlan } from './treatment-plan.entity';

export class TreatmentService {
  constructor(
    @InjectRepository(TreatmentPlan)
    private treatmentPlanRepository: Repository<TreatmentPlan>,
  ) {}

  async getTreatmentPlans(patientId: string) {
    return this.treatmentPlanRepository.findBy({ patientId });
  }
}
