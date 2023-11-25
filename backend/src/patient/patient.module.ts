import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientResolver } from './patient.resolver';
import { PatientsService } from './patient.service';
import { Patient } from './patient.entity';
import { TreatmentModule } from 'src/treatment/treatment.module';

@Module({
  imports: [TypeOrmModule.forFeature([Patient]), TreatmentModule],
  controllers: [],
  providers: [PatientsService, PatientResolver],
})
export class PatientModule {}
