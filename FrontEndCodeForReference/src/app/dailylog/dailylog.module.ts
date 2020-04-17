import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveDailylogComponent } from './save-dailylog/save-dailylog.component';
import { DailylogUserListComponent } from './dailylog-user-list/dailylog-user-list.component';
import { ViewDailylogComponent } from './view-dailylog/view-dailylog.component';
import { ViewDailylogHistroyComponent } from './view-dailylog-histroy/view-dailylog-histroy.component';
import { DailylogService } from './dailylog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SaveDailylogComponent, DailylogUserListComponent, ViewDailylogComponent, ViewDailylogHistroyComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule 
  ],
  exports : [SaveDailylogComponent, DailylogUserListComponent, ViewDailylogComponent, ViewDailylogHistroyComponent],
  providers : [DailylogService]
})
export class DailylogModule { }
