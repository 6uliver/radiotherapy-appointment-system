import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddDateOfBirth1700956561977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'patient',
      new TableColumn({
        name: 'dateOfBirth',
        type: 'timestamp',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('patient', 'dateOfBirth');
  }
}
