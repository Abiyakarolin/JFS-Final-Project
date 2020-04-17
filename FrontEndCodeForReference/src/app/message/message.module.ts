import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMessageComponent } from './send-message/send-message.component';
import { ReadUniqueUserListComponent } from './read-unique-user-list/read-unique-user-list.component';
import { ReadMessageConversationComponent } from './read-message-conversation/read-message-conversation.component';
import { MessageService } from './message.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SendMessageComponent, ReadUniqueUserListComponent, ReadMessageConversationComponent],
  imports: [
    CommonModule, RouterModule,ReactiveFormsModule
  ],
  exports:[SendMessageComponent, ReadUniqueUserListComponent, ReadMessageConversationComponent],
  providers:[MessageService]
})
export class MessageModule { }
