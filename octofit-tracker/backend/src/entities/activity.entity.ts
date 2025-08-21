import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Workout } from './workout.entity';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.activities)
  user: User;

  @ManyToOne(() => Workout, (workout) => workout.activities)
  workout: Workout;

  @Column()
  duration: number; // in minutes

  @Column()
  calories: number;

  @CreateDateColumn()
  date: Date;
}
