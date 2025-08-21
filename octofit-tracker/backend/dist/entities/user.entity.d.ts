import { Team } from './team.entity';
import { Activity } from './activity.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    username: string;
    team: Team;
    activities: Activity[];
    createdAt: Date;
}
