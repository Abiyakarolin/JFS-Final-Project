import { Component, OnInit } from '@angular/core';
import {  Message } from '../message';
import { MessageService } from '../message.service';
import { DietService } from '../../user/diet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-message-conversation',
  templateUrl: './read-message-conversation.component.html',
  styleUrls: ['./read-message-conversation.component.css']
})
export class ReadMessageConversationComponent implements OnInit {

  user2: string;
  messages: Message[];

  constructor(private messageService: MessageService, private dietService:DietService, private route:ActivatedRoute) {
    this.user2=messageService.user2;
   }

  ngOnInit() {
    this.messageService.readConversation(this.dietService.currentUserEmail, this.user2).subscribe((response)=>{
      this.messages=response;
    });
  }

}
