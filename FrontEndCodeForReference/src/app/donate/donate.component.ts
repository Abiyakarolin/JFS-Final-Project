import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DietService } from '../user/diet.service';
import { DonateService } from './donate.service';
import { Donate } from './donate';
import { User } from '../user/user';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  donateForm: FormGroup;
  msg: string;
  donation: Donate;
  today: Date;

  constructor(private dietService: DietService, private formBuilder: FormBuilder, private donateService: DonateService) { }

  ngOnInit() {
    this.donateForm = this.formBuilder.group({
      'amount': ['', [Validators.required, Validators.pattern("[0-9]{3,}"), Validators.min(100)]],
      'cardNum': ['', [Validators.required, Validators.pattern("[0-9]{16}")]],
      'cardName': ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,}")]],
      'cardExpiry': ['', [Validators.required]],
      'cvv':['', [Validators.required, Validators.pattern("[0-9]{3}")]]
    });
    this.today = new Date();
  }

  get amount(){
    return this.donateForm.get("amount");
  }

  get cardNum(){
    return this.donateForm.get("cardNum");
  }

  get cardName(){
    return this.donateForm.get("cardName");
  }

  get cardExpiry(){
    return this.donateForm.get("cardExpiry");
  }

  get cvv(){
    return this.donateForm.get("cvv");
  }

  donate(){
    if(this.donateForm.valid){
      this.donation = new Donate();
      this.donation.amount=this.donateForm.value["amount"];
      const user = new User();
      user.userId = this.dietService.currentId;
      this.donation.user = user;
      this.donateService.donate(this.donation).subscribe((response)=>{
        if(response.status === 'SUCCESS'){
          this.msg ="Thank You For Your Donation";
        }else{
          this.msg ="Something went wrong. Please try again!!!";
        }
      });
      this.donateForm.reset();
    }
  }
}