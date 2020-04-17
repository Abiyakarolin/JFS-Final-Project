import { Component, OnInit } from '@angular/core';
import { ManageUserService } from '../../manage.service';
import { User } from '../../user';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  selectedUser : User;
  allowEdit : boolean;

  constructor(private manageService : ManageUserService, private router : Router, private location : Location) { }

  ngOnInit(): void {

    this.selectedUser = this.manageService.selectedUser;
    this.allowEdit = this.manageService.allowEdit;

    if(!this.selectedUser){
      this.router.navigate["user/manage"];
    }
  }

  delete()
  {
    this.router.navigate(["user/delete"]);
  }

  edit()
  {
    this.router.navigate(["user/edit"]);
  }

  back()
  {
    this.location.back();
  }

}
