import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Patient } from 'src/patient/patient.entity';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';

function createRandomPatient(): Patient {
  return new Patient({
    id: faker.string.uuid(),
    dateOfBirth: faker.date.birthdate({ min: 18, max: 99, mode: 'age' }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    ssn: faker.string.numeric(9),
  });
}

export default class PatientSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const patients: Patient[] = faker.helpers.multiple(createRandomPatient, {
      count: 100,
    });
    await dataSource.createEntityManager().save<Patient>(patients);
  }
}
