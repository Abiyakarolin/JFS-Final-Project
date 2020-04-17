import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { DietService } from '../diet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  signedOut: boolean;

  constructor(private tokenService : TokenStorageService, private dietService : DietService, private router : Router) { }

  ngOnInit(): void {
    this.signedOut = false;
    this.dietService.signOut().subscribe((response)=>{
      if(response.status==="SUCCESS"){
        this.tokenService.signOut();
        this.signedOut=true;
        this.dietService.isloggedUser=false;
        this.dietService.currentUserEmail = " ";
        this.router.navigate(["/"]);
      }else{
        this.router.navigate(["/"]);
      }
    });

  }

}
