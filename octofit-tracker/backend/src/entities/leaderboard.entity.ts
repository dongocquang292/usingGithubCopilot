import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('leaderboard')
export class Leaderboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  score: number;
}
