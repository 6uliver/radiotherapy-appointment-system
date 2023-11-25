import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Fraction } from 'src/treatment/fraction.entity';
import { Machine } from './machine.entity';
import { MachineService } from './machine.service';

@Resolver(() => Fraction)
export class FractionResolver {
  constructor(private machineService: MachineService) {}

  @ResolveField(() => Machine)
  async machine(@Parent() fraction: Fraction) {
    return this.machineService.getMachineById(fraction.machineId);
  }
}
