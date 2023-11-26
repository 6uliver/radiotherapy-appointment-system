import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Fraction } from './fraction.entity';
import { TreatmentService } from './treatment.service';
import { Machine } from 'src/machine/machine.entity';

@Resolver(() => Machine)
export class MachineResolver {
  constructor(private treatmentService: TreatmentService) {}

  @ResolveField(() => [Fraction])
  async fractionsByDate(
    @Parent() machine: Machine,
    @Args('start', { type: () => Date }) start: Date,
    @Args('end', { type: () => Date }) end: Date,
  ) {
    return this.treatmentService.getFractionsForMachineByDate(
      machine.id,
      start,
      end,
    );
  }
}
