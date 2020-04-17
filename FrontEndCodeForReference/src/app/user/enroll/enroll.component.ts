import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DietService } from '../diet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  user: User;
  updateForm: FormGroup;
  isFemale:boolean;
  calculatedBmi: Number = 0;
  msg: string;

  constructor(private dietService: DietService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dietService.getUserWithEmail(this.dietService.currentUserEmail).subscribe((response)=>{
      this.user=response;
      this.updateForm = this.formBuilder.group({
        'age': [this.user.age, [Validators.required, Validators.pattern('[0-9]{2}'),Validators.min(18), Validators.max(65)]],
        'mobile': [this.user.mobile, [Validators.required,Validators.pattern('[0-9]{10}')]],
        'address':[this.user.address, [Validators.required]],
        'city':[this.user.city, [Validators.required]],
        'state':[this.user.state, [Validators.required]],
        'country':[this.user.country, [Validators.required]],
        'pincode':[this.user.pincode, [Validators.required, Validators.pattern('[0-9]{6}')]],
        'height': [this.user.height, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'weight': [this.user.weight, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'bmi':[this.user.bmi],
        'existingMedCondition': [this.user.medicalCondition],
        'existingDietRestriction':[this.user.dietaryRestriction],
        'dietaryCustom':[this.user.dietaryCustom, [Validators.required]],  
        'pregnantStatus': [this.user.pregnantStatus],
      });
      this.calculatedBmi = this.user.bmi;
      this.isFemaleFunc();
    });
  }

  get gender(){
    return this.user.gender;
  }

  get age(){
    return this.updateForm.get('age');
  }

  get mobile(){
    return this.updateForm.get('mobile');
  }

  get address(){
    return this.updateForm.get('address');
  }

  get city(){
    return this.updateForm.get('city');
  }

  get country(){
    return this.updateForm.get('country');
  }

  get state(){
    return this.updateForm.get('state');
  }

  get pincode(){
    return this.updateForm.get('pincode');
  }

  get height(){
    return this.updateForm.get('height');
  }

  get weight(){
    return this.updateForm.get('weight');
  }

  get bmi(){
    return this.updateForm.get('bmi');
  }

  get dietaryCustom(){
    return this.updateForm.get('dietaryCustom');
  }

  get pregnantStatus(){
    return this.updateForm.get('pregnantStatus');
  }

  onSubmit(){
    if(this.updateForm.valid){
      this.user.age = this.updateForm.value["age"];
      this.user.mobile = this.updateForm.value["mobile"];
      this.user.address = this.updateForm.value["address"];
      this.user.city = this.updateForm.value["city"];
      this.user.state = this.updateForm.value["state"];
      this.user.pincode = this.updateForm.value["pincode"];
      this.user.country = this.updateForm.value["country"];
      this.user.height = this.updateForm.value["height"];
      this.user.weight = this.updateForm.value["weight"];
      this.user.medicalCondition = this.updateForm.value["existingMedCondition"];
      this.user.dietaryRestriction = this.updateForm.value["existingDietRestriction"];
      this.user.dietaryCustom = this.updateForm.value["dietaryCustom"];
      this.user.pregnantStatus = this.updateForm.value["pregnantStatus"];
      this.user.bmi=Number(this.calculatedBmi);
      this.user.groupsId=null;
      this.dietService.editUser(this.user).subscribe((response)=>{
        if(response.status === 'SUCCESS'){
          this.msg="We have received your request. Your Program Admin will review your updated details and get back to you for next batch";
          this.dietService.currentUserBatchStatus = null;
        }else{
          this.msg="Something went wrong. Please try again!!!";
        }
      });
      this.updateForm.reset();
    }
  }

  isFemaleFunc(){
    if(this.gender ==='Female'){
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