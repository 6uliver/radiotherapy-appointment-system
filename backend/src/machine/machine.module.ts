import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machine } from './machine.entity';
import { MachineService } from './machine.service';
import { MachineResolver } from './machine.resolver';
import { FractionResolver } from './fraction.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Machine])],
  controllers: [],
  providers: [MachineService, MachineResolver, FractionResolver],
  exports: [MachineService],
})
export class MachineModule {}
