import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DietService } from '../diet.service';
import { ManageUserService } from '../manage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  activeUsers: User[];

  constructor(private dietService: DietService, private manageUserService: ManageUserService, private router:Router) { }

  ngOnInit() {
    this.dietService.getActiveUsers().subscribe((response)=>{
      this.activeUsers=response;
    });
  }

  manage(user: User){
    this.manageUserService.selectUser(user);
    this.manageUserService.allowEdit = true;
    this.router.navigate(["/user/view"]);
  }

}
