import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DietService } from '../../user/diet.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../user/user';
import { Message } from '../message';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  sendMsgForm: FormGroup;
  categoryOptions: string[]=['user','batch','group'];
  msg: string;
  currentUser: User;


  constructor(private messageService : MessageService, private dietService : DietService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.sendMsgForm = this.fb.group({
      "category" : ['user', [Validators.required]],
      "target": ['', [Validators.required]],
      "message": ['', [Validators.required]]
    });
    this.currentUser = new User();
    this.currentUser.email=this.dietService.currentUserEmail;
  }

  get category(){
    return this.sendMsgForm.get("category");
  }

  get target(){
    return this.sendMsgForm.get("target");
  }

  get message(){
    return this.sendMsgForm.get("message");
  }

  onSubmit(){
    if(this.sendMsgForm.valid){
      const message = new Message();
      message.message=this.sendMsgForm.value["message"];
      message.from=this.currentUser;
      this.messageService.saveMessage(message, this.sendMsgForm.value["category"], this.sendMsgForm.value["target"]).subscribe((response)=>{
        if(response.status === 'SUCCESS'){
          this.msg="Message Sent Successfully!!!";
        }else{
          this.msg=response.status;
        }
      });
    }
  }

  onChange(){
    this.msg=""
  }

}
