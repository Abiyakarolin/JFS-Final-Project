import { Groups } from '../batch/groups';

export class User{
    userId : number;
    fullname : string;
    age : number;
    gender : string;
    mobile : number;
    email : string;
    address : string;
    city : string;
    state : string;
    country : string;
    pincode : number;
    height : number;
    weight : number;
    bmi : number;
    reason : string;
    medicalCondition : string;
    dietaryRestriction : string;
    dietaryCustom : string;
    pregnantStatus : string;
    referralCode : string;
    userType : string;
    isapproved : boolean;
    friendsReferralCode : string;
    password : string;
    groupsId?: Groups;
}