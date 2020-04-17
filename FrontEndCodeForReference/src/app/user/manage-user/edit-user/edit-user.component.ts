import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../user';
import { DietService } from'../../diet.service';
import { ManageUserService } from '../../manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm: FormGroup;
  message: string;
  editedUser: User;
  selectedUser: User;
  isFemale:boolean;
  calculatedBmi: Number = 0;
 
  constructor(private formBuilder:FormBuilder,private dietService:DietService, private manageUserService: ManageUserService, private router:Router) { }

  ngOnInit() {
    this.selectedUser=this.manageUserService.selectedUser;
    this.isFemale=this.selectedUser.gender === 'Female';
    this.calculatedBmi=this.selectedUser.bmi;
    this.editForm=this.formBuilder.group(
      {
        'fullname':[this.selectedUser.fullname,[Validators.required,Validators.pattern('[a-zA-Z]{1,}')]],
        'userId':[this.selectedUser.userId],
       // 'password':[this.selectedUser.password,[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        'userType':[this.selectedUser.userType],
        'age': [this.selectedUser.age, [Validators.required, Validators.pattern('[0-9]{2}'),Validators.min(18), Validators.max(65)]],
        'email': [this.selectedUser.email, [Validators.required, Validators.email]],
        'mobile': [this.selectedUser.mobile, [Validators.required,Validators.pattern('[0-9]{10}')]],
        'height': [this.selectedUser.height, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'weight': [this.selectedUser.weight, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'bmi':[this.selectedUser.bmi],
        'gender': [this.selectedUser.gender, [Validators.required]],
        'pregnantStatus': [this.selectedUser.pregnantStatus],
        'dietaryCustom':[this.selectedUser.dietaryCustom, [Validators.required]],  
        'dietaryRestriction':[this.selectedUser.dietaryRestriction],
        'medicalCondition': [this.selectedUser.medicalCondition],
        'address':[this.selectedUser.address, [Validators.required]],
        'city':[this.selectedUser.city, [Validators.required]],
        'state':[this.selectedUser.state, [Validators.required]],
        'country':[this.selectedUser.country, [Validators.required]],
        'pincode':[this.selectedUser.pincode, [Validators.required, Validators.pattern('[0-9]{6}')]],
        'reason': [this.selectedUser.reason, [Validators.required]],
        'referralCode':[this.selectedUser.referralCode],
        'friendsReferralCode':[this.selectedUser.friendsReferralCode, [Validators.required]],
      }
    );
  }

  edit(){
    if(this.editForm.valid){
      this.editedUser=this.editForm.value;
      this.editedUser.password = this.selectedUser.password;
      this.editedUser.bmi=Number(this.calculatedBmi);
      this.editedUser.isapproved =true;
      this.dietService.editUser(this.editedUser).subscribe((response)=>{
        if(response.status==='SUCCESS'){
          this.manageUserService.selectUser(this.editedUser);
          this.router.navigate(['/user/view']);
        }else{
          this.message="Something went wrong. Please try again!";
        }
      });
    }
  }

  get fullname(){
    return this.editForm.get('fullname');
  }

  get age(){
    return this.editForm.get('age');
  }

  get gender(){
    return this.editForm.get('gender');
  }

  get mobile(){
    return this.editForm.get('mobile');
  }

  get email(){
    return this.editForm.get('email');
  }

  get address(){
    return this.editForm.get('address');
  }

  get city(){
    return this.editForm.get('city');
  }

  get country(){
    return this.editForm.get('country');
  }

  get state(){
    return this.editForm.get('state');
  }

  get pincode(){
    return this.editForm.get('pincode');
  }

  get height(){
    return this.editForm.get('height');
  }

  get weight(){
    return this.editForm.get('weight');
  }

  get bmi(){
    return this.editForm.get('bmi');
  }

  get reason(){
    return this.editForm.get('reason');
  }

  get dietaryCustom(){
    return this.editForm.get('dietaryCustom');
  }

  get pregnantStatus(){
    return this.editForm.get('pregnantStatus');
  }

  get friendsReferralCode(){
    return this.editForm.get('friendsReferralCode');
  }

  get userId(){
    return this.editForm.get('userId');
  }

  get password(){
    return this.editForm.get('password');
  }

  get referralCode(){
    return this.editForm.get('referralCode');
  }

  isFemaleFunc(){
    if(this.gender.value ==='Female'){
      this.isFemale=true;
    }else{
      this.isFemale=false;
    }
  }

  calculateBmi(){
    if(this.height.valid && this.weight.valid){
      this.calculatedBmi=Math.round(((Number(this.weight.value))/((Number(this.height.value)/100) * (Number(this.height.value)/100))));
  }

}

}
