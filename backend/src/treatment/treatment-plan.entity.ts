import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Region } from './region.enum';

@Entity()
@ObjectType()
export class TreatmentPlan {
  constructor(partial: Partial<TreatmentPlan>) {
    Object.assign(this, partial);
  }

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  patientId: string;

  @Field()
  @Column()
  fractionCount: number;

  @Field()
  @Column()
  fractionMinutes: number;

  @Field(() => Region)
  @Column()
  region: Region;

  @Column()
  inpatient: boolean;

  @Column()
  largeBodied: boolean;

  @Column()
  breathHolding: boolean;

  @Column()
  kvImaging: boolean;
}
