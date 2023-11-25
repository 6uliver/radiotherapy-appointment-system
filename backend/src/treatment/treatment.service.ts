import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TreatmentPlan } from './treatment-plan.entity';
import { Fraction } from './fraction.entity';

export class TreatmentService {
  constructor(
    @InjectRepository(TreatmentPlan)
    private treatmentPlanRepository: Repository<TreatmentPlan>,
    @InjectRepository(Fraction)
    private fractionRepository: Repository<Fraction>,
  ) {}

  async getTreatmentPlans(patientId: string) {
    return this.treatmentPlanRepository.findBy({ patientId });
  }

  async getFractionsForTreatmentPlan(id: string) {
    return this.fractionRepository.findBy({ treatmentPlanId: id });
  }
}
