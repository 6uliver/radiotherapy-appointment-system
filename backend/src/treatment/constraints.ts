import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Constraints {
  @Field()
  inpatient: boolean;
  @Field()
  largeBodied: boolean;
  @Field()
  breathHolding: boolean;
  @Field()
  kvImaging: boolean;
  @Field()
  transport: boolean;
}
