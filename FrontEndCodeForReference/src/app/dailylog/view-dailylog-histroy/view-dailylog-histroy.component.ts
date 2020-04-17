import { Component, OnInit } from '@angular/core';
import { Dailylog } from '../dailylog';
import { DailylogService } from '../dailylog.service';

@Component({
  selector: 'app-view-dailylog-histroy',
  templateUrl: './view-dailylog-histroy.component.html',
  styleUrls: ['./view-dailylog-histroy.component.css']
})
export class ViewDailylogHistroyComponent implements OnInit {

  dailyLogs: Dailylog[];

  constructor(private dailyLogService: DailylogService) { }

  ngOnInit() {
    this.dailyLogService.getDailyLogHistory(this.dailyLogService.selectedUserId).subscribe((response)=>{
      this.dailyLogs = response;
    })
  }

}
