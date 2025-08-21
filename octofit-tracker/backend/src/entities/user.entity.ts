import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Team } from './team.entity';
import { Activity } from './activity.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @ManyToOne(() => Team, (team) => team.users)
  team: Team;

  @OneToMany(() => Activity, (activity) => activity.user)
  activities: Activity[];

  @CreateDateColumn()
  createdAt: Date;
}
