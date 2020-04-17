import { Groups } from '../batch/groups';

export class WeeklyPlan {

    id? : string;
    groupsId : Groups;
    file : FormData;
}
