import { User } from '../user/user';

export class MonthlyMeasurementChart {
    id? : {
        user : User,
        date?: any,
    }

    height: number;
    weight: number;
    chest: number;
    waist: number;
    shoulder: number;
    biceps: number;
    forearm: number;
    leg: number;
    thighs: number;
    bmi: number;
}
