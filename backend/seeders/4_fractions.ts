import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import { TreatmentPlan } from 'src/treatment/treatment-plan.entity';
import { Fraction } from 'src/treatment/fraction.entity';
import { Machine } from 'src/machine/machine.entity';

function createRandomFractions(
  treatmentPlans: TreatmentPlan[],
  machines: Machine[],
) {
  return () => {
    const start = faker.date.recent();
    const treatmentPlan = faker.helpers.arrayElement(treatmentPlans);
    const end = new Date(
      start.getTime() + treatmentPlan.fractionMinutes * 24 * 60,
    );
    return new Fraction({
      id: faker.string.uuid(),
      treatmentPlanId: treatmentPlan.id,
      machineId: faker.helpers.arrayElement(machines).id,
      start,
      end,
    });
  };
}

export default class FractionsSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const treatmentPlans = await dataSource
      .createEntityManager()
      .find(TreatmentPlan);
    const machines = await dataSource.createEntityManager().find(Machine);
    const fractions: Fraction[] = faker.helpers.multiple(
      createRandomFractions(treatmentPlans, machines),
      {
        count: 150,
      },
    );
    await dataSource.createEntityManager().save<Fraction>(fractions);
  }
}
