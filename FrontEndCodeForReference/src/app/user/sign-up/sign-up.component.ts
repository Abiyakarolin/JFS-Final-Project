import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DietService } from '../diet.service';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm : FormGroup;
  message: string;
  isFemale: boolean;
  calculatedBmi: Number = 0;
  user : User;
  constructor(private fb : FormBuilder, private dietService : DietService, private router : Router,
              ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullname : ["",[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      age : ["",[Validators.required, Validators.pattern('[0-9]{2}'),Validators.min(18), Validators.max(65)]],
      gender: ["Male",[Validators.required]],
      mobile:["",[Validators.required,Validators.pattern('[0-9]{10}')]],
      email:["",[Validators.required, Validators.email]],
      address:["",[Validators.required]],
      city:["",[Validators.required]],
      state:["",[Validators.required]],
      country:["",[Validators.required]],
      pincode:["",[Validators.required,Validators.pattern('[0-9]{6}')]],
      height:["",[Validators.required,Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
      weight:["",[Validators.required,Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
      bmi:[""],
      reason:["",[Validators.required]],
      medicalCondition:[""],
      dietaryRestriction:[""],
      dietaryCustom:["Vegetarian", [Validators.required]],
      pregnantStatus:["No"],
      friendsReferralCode:["",[Validators.required]]
    });
  }

  get fullname(){
    return this.signupForm.get('fullname');
  }
  get age(){
    return this.signupForm.get('age');
  }

  get gender(){
    return this.signupForm.get('gender');
  }

  get mobile(){
    return this.signupForm.get('mobile');
  }

  get email(){
    return this.signupForm.get('email');
  }

  get address(){
    return this.signupForm.get('address');
  }

  get city(){
    return this.signupForm.get('city');
  }

  get country(){
    return this.signupForm.get('country');
  }

  get state(){
    return this.signupForm.get('state');
  }

  get pincode(){
    return this.signupForm.get('pincode');
  }

  get height(){
    return this.signupForm.get('height');
  }

  get weight(){
    return this.signupForm.get('weight');
  }

  get bmi(){
    return this.signupForm.get('bmi');
  }

  get reasonForSignUp(){
    return this.signupForm.get('reason');
  }

  get dietaryCustom(){
    return this.signupForm.get('dietaryCustom');
  }

  get pregnantStatus(){
    return this.signupForm.get('pregnantStatus');
  }

  get friendsReferralCode(){
    return this.signupForm.get('friendsReferralCode');
  }

  onSubmit(){
    this.user = this.signupForm.value;
   // console.log(this.signupForm.value.weight,this.signupForm.value.height);
   // this.addForm.value.bmi =((this.addForm.value.weight)/((this.addForm.value.height/100)*(this.addForm.value.height/100)));
    this.user.bmi =Number(this.calculatedBmi);
  //  console.log(this.signupForm.value.bmi);
  //  let data = this.signupForm.value;
    let resp =  this.dietService.signUp(this.user);
    
    resp.subscribe((response)=>{
      if(response.status === 'SUCCESS'){
        alert("Registration Request Accepted. Please wait for approval. You will receive the status via email");
        this.message="Registration Request Accepted. Please wait for approval. You will receive the status via email";
      }else{
        alert("Registration Is Not Successful as "+response.status);
        this.message="Registration Is Not Successful as "+response.status;
      }
    });
  //  this.signupForm.reset();
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


