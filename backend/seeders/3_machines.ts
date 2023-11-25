import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Machine } from 'src/machine/machine.entity';

function createMachine(name: string) {
  return new Machine({
    id: faker.string.uuid(),
    name,
  });
}

export default class MachinesSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const machines: Machine[] = ['TB1', 'TB2', 'VB1', 'VB2', 'U'].map(
      createMachine,
    );
    await dataSource.createEntityManager().save(machines);
  }
}
