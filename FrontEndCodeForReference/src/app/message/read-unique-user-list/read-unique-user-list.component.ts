import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DietService } from '../../user/diet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-unique-user-list',
  templateUrl: './read-unique-user-list.component.html',
  styleUrls: ['./read-unique-user-list.component.css']
})
export class ReadUniqueUserListComponent implements OnInit {

  users: string[];

  constructor(private messageService:MessageService, private dietService: DietService, private router:Router) { }

  ngOnInit() {
    this.messageService.readUniqueUsers(this.dietService.currentUserEmail).subscribe((response)=>{
      this.users=response;
    });
  }

  onClick(user2: string){
    this.messageService.user2=user2;
    this.router.navigateByUrl("/message/read/conversation", {
       queryParams: { user2: user2 } 
    });
  }

}
