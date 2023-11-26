import { InjectRepository } from '@nestjs/typeorm';
import { In, LessThan, MoreThan, Repository } from 'typeorm';
import { TreatmentPlan } from './treatment-plan.entity';
import { Fraction } from './fraction.entity';
import { PatientService } from 'src/patient/patient.service';
import { NotFoundException } from '@nestjs/common';
import { NotificationService } from './notification.service';

export class TreatmentService {
  constructor(
    @InjectRepository(TreatmentPlan)
    private treatmentPlanRepository: Repository<TreatmentPlan>,
    @InjectRepository(Fraction)
    private fractionRepository: Repository<Fraction>,
    private patientService: PatientService,
    private notificationService: NotificationService,
  ) {}

  async getTreatmentPlans(patientId: string) {
    return this.treatmentPlanRepository.findBy({ patientId });
  }

  async getTreatmentPlansWaitingForSchedule() {
    const result = await this.fractionRepository
      .createQueryBuilder()
      .select("COUNT('Fraction.id')", 'fractionCount')
      .addSelect('"Fraction"."treatmentPlanId"', 'treatmentPlanId')
      .groupBy('"Fraction"."treatmentPlanId"')
      .getRawMany();

    const counts = {};

    result.forEach((row) => {
      counts[row.treatmentPlanId] = row.fractionCount;
    });

    const treatmentPlans = await this.treatmentPlanRepository.find();

    return treatmentPlans.filter((treatmentPlan) => {
      return treatmentPlan.fractionCount > (counts[treatmentPlan.id] ?? 0);
    });
  }

  async getFractionCount(id: string) {
    return this.fractionRepository.countBy({ treatmentPlanId: id });
  }

  async getFractionsForTreatmentPlan(id: string) {
    return this.fractionRepository.findBy({ treatmentPlanId: id });
  }

  async getFractionsForMachineByDate(id: string, start: Date, end: Date) {
    return this.fractionRepository.findBy({
      machineId: id,
      start: MoreThan(start),
      end: LessThan(end),
    });
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

  async notifyPatient(id: string) {
    const treatmentPlan = await this.treatmentPlanRepository.findOneBy({ id });
    if (!treatmentPlan) {
      throw new NotFoundException('Treatment plan not found');
    }

    const patient = await this.patientService.getPatient(
      treatmentPlan.patientId,
    );

    this.notificationService.sendNotification(
      patient.email,
      patient.phone,
      treatmentPlan.id,
    );

    return true;
  }
}
