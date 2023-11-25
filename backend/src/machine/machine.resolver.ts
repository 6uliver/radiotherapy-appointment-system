import { Query, Resolver } from '@nestjs/graphql';
import { MachineService } from './machine.service';
import { Machine } from './machine.entity';

@Resolver(() => Machine)
export class MachineResolver {
  constructor(private machineService: MachineService) {}

  @Query(() => [Machine])
  async machines() {
    return this.machineService.getMachines();
  }
}
