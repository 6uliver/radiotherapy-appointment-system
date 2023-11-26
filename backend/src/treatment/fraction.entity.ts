import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Fraction {
  constructor(partial: Partial<Fraction>) {
    Object.assign(this, partial);
  }

  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  treatmentPlanId: string;

  @Column()
  machineId: string;

  @Field()
  @Column()
  start: Date;

  @Field()
  @Column()
  end: Date;
}
