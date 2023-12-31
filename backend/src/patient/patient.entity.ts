import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Patient {
  constructor(partial: Partial<Patient>) {
    Object.assign(this, partial);
  }

  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  dateOfBirth: Date;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  ssn: string;

  @Field({ nullable: true })
  @Column()
  phone: string;

  @Field({ nullable: true })
  @Column()
  email: string;
}
