import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddRegion1700952357880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'treatment_plan',
      new TableColumn({
        name: 'region',
        type: 'enum',
        enum: [
          'craniospinal',
          'breast',
          'breast-special',
          'head-neck',
          'abdomen',
          'pelvis',
          'crane',
          'lung',
          'lung-special',
          'whole-brain',
        ],
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('treatment_plan', 'region');
  }
}
