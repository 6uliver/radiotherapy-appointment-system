import { Seeder } from '@jorgebodega/typeorm-seeding';
import { User } from 'src/user.entity';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';

function createRandomUser(): User {
  return new User({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  });
}

export default class UserSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const users: User[] = faker.helpers.multiple(createRandomUser, {
      count: 5,
    });
    await dataSource.createEntityManager().save<User>(users);
  }
}
