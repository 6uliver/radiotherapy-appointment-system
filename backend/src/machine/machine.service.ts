import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Machine } from './machine.entity';

export class MachineService {
  constructor(
    @InjectRepository(Machine)
    private machineRepository: Repository<Machine>,
  ) {}

  getMachines() {
    return this.machineRepository.find();
  }

  getMachineById(id: string) {
    return this.machineRepository.findOneBy({ id });
  }

  getMachine(id: string) {
    return this.machineRepository.findOneBy({ id });
  }
}
