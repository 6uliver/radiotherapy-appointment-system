import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Patient } from 'src/patient/patient.entity';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';

function createRandomPatient(): Patient {
  return new Patient({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    ssn: faker.string.numeric(9),
  });
}

export default class PatientSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const patients: Patient[] = faker.helpers.multiple(createRandomPatient, {
      count: 5,
    });
    await dataSource.createEntityManager().save<Patient>(patients);
  }
}
