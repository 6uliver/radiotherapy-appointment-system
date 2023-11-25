import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameUserToPatient1700927790450 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('user', 'patient');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('patient', 'user');
  }
}
