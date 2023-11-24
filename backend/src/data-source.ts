import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dataSource: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'appointment-system',
  autoLoadEntities: true,
  migrations: ['./dist/migrations/*.js'],
  migrationsRun: true,
  synchronize: false,
  entities: [],
};
