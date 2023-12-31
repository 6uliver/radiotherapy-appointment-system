import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import { TreatmentPlan } from 'src/treatment/treatment-plan.entity';
import { Fraction } from 'src/treatment/fraction.entity';
import { Machine } from 'src/machine/machine.entity';

export default class FractionsSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const treatmentPlans = await dataSource
      .createEntityManager()
      .find(TreatmentPlan);
    const selectedTreatmentPlans = faker.helpers.arrayElements(
      treatmentPlans,
      500,
    );

    let j = 0;
    const machines = await dataSource.createEntityManager().find(Machine);
    for (const selectedTreatmentPlan of selectedTreatmentPlans) {
      const machineId = faker.helpers.arrayElement(machines).id;
      const fractions: Fraction[] = [];
      const count = faker.number.int({
        min: selectedTreatmentPlan.fractionCount / 2,
        max: selectedTreatmentPlan.fractionCount,
      });
      for (let i = 0; i < count; i++) {
        const start = new Date(
          Date.now() - (14 - i) * 24 * 60 * 60 * 1000 + j * 15 * 60 * 1000,
        );
        const end = new Date(
          start.getTime() + selectedTreatmentPlan.fractionMinutes * 60 * 1000,
        );
        fractions.push(
          new Fraction({
            id: faker.string.uuid(),
            treatmentPlanId: selectedTreatmentPlan.id,
            machineId,
            start,
            end,
          }),
        );
      }
      console.log(fractions);
      await dataSource.createEntityManager().save<Fraction>(fractions);
      j += faker.number.int({ min: 1, max: 3 });
    }
  }
}
