import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DietService } from '../diet.service';
import { ManageUserService } from '../manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-sign-up',
  templateUrl: './review-sign-up.component.html',
  styleUrls: ['./review-sign-up.component.css']
})
export class ReviewSignUpComponent implements OnInit {

  allPendingUsers : User[];
  selectedIndex: number;
  message: string = '';
  reason: string;

  constructor(private dietService : DietService, private manageUserService : ManageUserService,
    private router : Router) { }

  ngOnInit(): void {

    this.dietService.getPendingUsers().subscribe((response)=>{
      this.allPendingUsers = response;
    });

    this.selectedIndex = 0;

  }

  get selectedItem(){
    return this.allPendingUsers !=null? this.allPendingUsers[this.selectedIndex]:null;
  }

  get allPendingLength(){
    return this.allPendingUsers !=null? this.allPendingUsers.length:0;
  }

  display(selectedPage:number){
    this.selectedIndex=selectedPage;
  }

  reviewAction(approve:boolean){
    this.dietService.reviewAction(approve, this.selectedItem, this.reason).subscribe((response)=>{
      if(response.status === 'SUCCESS'){
        this.allPendingUsers=this.allPendingUsers.filter((value)=>{
          alert("Mail sent successfully");
          return (value.email !== this.selectedItem.email);
        });
      }else{
        this.message="Something went wrong. Please try again!";
      }
      this.selectedIndex=0;
    });
  }

  setReason(value: string){
    this.reason = value;
  }

}
