import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientResolver } from './patient.resolver';
import { PatientService } from './patient.service';
import { Patient } from './patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  controllers: [],
  providers: [PatientService, PatientResolver],
  exports: [PatientService],
})
export class PatientModule {}
