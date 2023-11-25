import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTreatmentPlans1700929779699 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'treatment_plan',
        foreignKeys: [
          {
            name: 'fk_treatment_plan_patient_id',
            columnNames: ['patientId'],
            referencedTableName: 'patient',
            referencedColumnNames: ['id'],
          },
        ],
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'patientId',
            type: 'uuid',
          },
          {
            name: 'fractionCount',
            type: 'int',
          },
          {
            name: 'fractionMinutes',
            type: 'int',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
