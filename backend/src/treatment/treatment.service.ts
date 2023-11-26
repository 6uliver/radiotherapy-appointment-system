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
