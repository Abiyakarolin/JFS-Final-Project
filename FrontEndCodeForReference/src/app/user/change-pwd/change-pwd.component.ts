import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DietService } from '../diet.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {

  changePwdForm: FormGroup;
  msg: string;

  constructor(private dietService: DietService, private formBuilder: FormBuilder, private location : Location) { }

  ngOnInit() {
    this.changePwdForm = this.formBuilder.group({
      'oldPassword': ['',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      'newPassword' : ['',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      'confirmNewPassword': ['',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  get oldPassword(){
    return this.changePwdForm.get("oldPassword");
  }

  get newPassword(){
    return this.changePwdForm.get("newPassword");
  }

  get confirmNewPassword(){
    return this.changePwdForm.get("confirmNewPassword");
  }

  changePwd(){
    if(this.changePwdForm.valid){
      const oldPassword = this.changePwdForm.value["oldPassword"];
      const newPassword = this.changePwdForm.value["newPassword"];
      const confirmPassword = this.changePwdForm.value["confirmNewPassword"];
      if(newPassword !== confirmPassword){
        this.msg = "New Password is not matching with the Confirm Password!!!";
      }else if(oldPassword === newPassword){
        this.msg = "Old and New Passwords are same!!!"
      }else{
        this.msg = "";
        this.dietService.changePassword(oldPassword, newPassword).subscribe(
          (response)=>{
            if(response.status==='SUCCESS'){
              this.msg = "Password Changed Successfully!!!";
            }else{
              this.msg = response.status;
            }
          });
      }
      this.changePwdForm.reset();
    }
  }

  back()
  {
      this.location.back();
  }

}
