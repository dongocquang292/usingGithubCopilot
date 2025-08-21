import { User } from './user.entity';
import { Workout } from './workout.entity';
export declare class Activity {
    id: number;
    user: User;
    workout: Workout;
    duration: number;
    calories: number;
    date: Date;
}
