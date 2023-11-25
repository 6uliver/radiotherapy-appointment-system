import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Patient } from 'src/patient/patient.entity';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import { TreatmentPlan } from 'src/treatment/treatment-plan.entity';

function createRandomTreatmentPlans(patients: Patient[]) {
  return () =>
    new TreatmentPlan({
      id: faker.string.uuid(),
      patientId: faker.helpers.arrayElement(patients).id,
      fractionCount: faker.number.int({ min: 1, max: 35 }),
      fractionMinutes: faker.number.int({ min: 10, max: 30 }),
    });
}

export default class TreatmentPlanSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const patients = await dataSource.createEntityManager().find(Patient);
    const treatmentPlans: TreatmentPlan[] = faker.helpers.multiple(
      createRandomTreatmentPlans(patients),
      {
        count: 15,
      },
    );
    await dataSource.createEntityManager().save<TreatmentPlan>(treatmentPlans);
  }
}
