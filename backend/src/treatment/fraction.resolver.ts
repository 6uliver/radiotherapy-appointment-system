import { Resolver } from '@nestjs/graphql';
import { TreatmentService } from './treatment.service';
import { Fraction } from './fraction.entity';

@Resolver(() => Fraction)
export class FractionResolver {
  constructor(private treatmentService: TreatmentService) {}
}
