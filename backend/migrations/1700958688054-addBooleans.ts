import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddBooleans1700958688054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('treatment_plan', [
      new TableColumn({
        name: 'inpatient',
        type: 'boolean',
        isNullable: false,
      }),
      new TableColumn({
        name: 'largeBodied',
        type: 'boolean',
        isNullable: false,
      }),
      new TableColumn({
        name: 'breathHolding',
        type: 'boolean',
        isNullable: false,
      }),
      new TableColumn({
        name: 'kvImaging',
        type: 'boolean',
        isNullable: false,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('treatment_plan', 'inpatient');
  }
}
