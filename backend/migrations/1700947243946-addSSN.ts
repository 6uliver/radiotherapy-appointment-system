import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddSSN1700947243946 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'patient',
      new TableColumn({
        name: 'ssn',
        type: 'varchar',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('patient', 'ssn');
  }
}
