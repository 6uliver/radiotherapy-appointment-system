import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Fraction {
  constructor(partial: Partial<Fraction>) {
    Object.assign(this, partial);
  }

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  treatmentPlanId: string;

  @Field()
  @Column()
  start: Date;

  @Field()
  @Column()
  end: Date;
}
