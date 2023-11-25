import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Patient } from 'src/patient/patient.entity';
import { DataSource } from 'typeorm';
import { Machine } from 'src/machine/machine.entity';

export default class ClearSeeder extends Seeder {
  async run(dataSource: DataSource) {
    await dataSource.createEntityManager().delete(Patient, {});
    await dataSource.createEntityManager().delete(Machine, {});
  }
}
