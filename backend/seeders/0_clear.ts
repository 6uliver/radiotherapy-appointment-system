import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Patient } from 'src/patient/patient.entity';
import { DataSource } from 'typeorm';
import { TreatmentPlan } from 'src/treatment/treatment-plan.entity';

export default class ClearSeeder extends Seeder {
  async run(dataSource: DataSource) {
    await dataSource.createEntityManager().delete(TreatmentPlan, {});
    await dataSource.createEntityManager().delete(Patient, {});
  }
}
