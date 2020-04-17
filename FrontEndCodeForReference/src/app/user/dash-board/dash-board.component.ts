import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { Router } from '@angular/router';
import { DietService } from '../diet.service';
import { ManageUserService } from '../manage.service';
import { ManageUserComponent } from '../manage-user/manage-user.component';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  role : String;
  context : String;

  constructor(private tokenService : TokenStorageService, private router :  Router, private dietService : DietService,
              private manageservice : ManageUserService) { }

  ngOnInit(): void {
    this.role = this.tokenService.getUser().role;

    if( this.role === 'Admin'){
      this.context = 'This is your dashboard. As an admin you get full access to all the user data. You can approve new users, search or modify or delete existing users, assign batches to the users, view batch report and progress, message challengers and motivators, and post weekly plan for batches and groups.';
    }


  }

  myProfile(){
  
  this.dietService.getUserWithEmail(this.tokenService.getUser().email).subscribe(
    data => {
      this.manageservice.selectedUser = data;
      this.manageservice.allowEdit=false;
      this.router.navigate(["user/view"]);
    },
    err => {
      console.log(err.error.message);}
      );
  

  }

}
