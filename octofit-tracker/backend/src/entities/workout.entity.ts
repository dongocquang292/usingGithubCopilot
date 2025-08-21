import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Activity } from './activity.entity';

@Entity('workouts')
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @OneToMany(() => Activity, (activity) => activity.workout)
  activities: Activity[];
}
