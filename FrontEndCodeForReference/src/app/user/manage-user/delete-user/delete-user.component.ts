import { Component, OnInit } from '@angular/core';
import { DietService } from '../../diet.service';
import { ManageUserService } from '../../manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  message : String = "";

  constructor(private dietService : DietService, private manageUserService : ManageUserService, private router : Router) { }

  ngOnInit(): void {
  }

  delete(shouldDelete:boolean){
    if(shouldDelete){
      this.dietService.deleteUser(this.manageUserService.selectedUser).subscribe((response)=>{
        if(response.status==='SUCCESS'){
          this.manageUserService.selectedUser=null;
          this.router.navigate(["/user/manage"]);
        }else{
          this.message="Something went wrong. Please try again!";
        }
      });
    }else{
      this.router.navigate(["/user/view"]);
    }  
  }

}
