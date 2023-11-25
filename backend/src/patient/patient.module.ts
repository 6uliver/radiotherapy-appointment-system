import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientResolver } from './user.resolver';
import { PatientsService } from './user.service';
import { Patient } from './patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  controllers: [],
  providers: [PatientsService, PatientResolver],
})
export class PatientModule {}
