import { DataSource, DataSourceOptions } from 'typeorm';
// import { User } from './user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'appointment-system',
  migrations: ['./dist/migrations/*.js'],
  migrationsRun: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  // logging: ['query', 'error'],
};

export default new DataSource(dataSourceOptions);
