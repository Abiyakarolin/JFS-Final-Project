import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPwdForm: FormGroup;
  msg: string;

  constructor(private dietService: DietService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgotPwdForm = this.formBuilder.group({
      'email' : ['',[Validators.email, Validators.required]]
    });
  }

  get email(){
    return this.forgotPwdForm.get("email");
  }

  onInput(){
    this.msg=null;
  }

  onSubmit(){
    if(this.forgotPwdForm.valid){
      this.dietService.forgotPassword(this.forgotPwdForm.value["email"]).subscribe((response)=>{
        if(response.status === 'SUCCESS'){
          this.msg ="We have sent your new password to your email. Please login and change your password as soon as possible";
        }else{
          this.msg=response.status;
        }
      });
    }
  }

}
