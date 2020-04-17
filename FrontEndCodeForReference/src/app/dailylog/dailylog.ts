import { User } from '../user/user';

export class Dailylog {
    dailyLogKey?: {
        user: User;
        date?: any;
    }
    breakfast: string;
    lunch: string;
    dinner: string;
    fruitsConsumed: string;
    vegetablesConsumed: string;
    workoutDone: string;
}
