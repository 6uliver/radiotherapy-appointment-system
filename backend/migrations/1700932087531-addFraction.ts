import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddFraction1700932087531 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fraction',
        foreignKeys: [
          {
            name: 'fraction_treatmentPlanId_fk',
            columnNames: ['treatmentPlanId'],
            referencedTableName: 'treatment_plan',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
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
            name: 'treatmentPlanId',
            type: 'uuid',
          },
          {
            name: 'start',
            type: 'timestamp',
          },
          {
            name: 'end',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fraction');
  }
}
