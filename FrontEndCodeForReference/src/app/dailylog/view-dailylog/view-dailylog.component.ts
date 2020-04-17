import { Component, OnInit } from '@angular/core';
import { Dailylog } from '../dailylog';
import { DailylogService } from '../dailylog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-dailylog',
  templateUrl: './view-dailylog.component.html',
  styleUrls: ['./view-dailylog.component.css']
})
export class ViewDailylogComponent implements OnInit {

  dailyLog: Dailylog;

  constructor(private dailylogService: DailylogService, private router: Router) {
  }

  ngOnInit() {
    this.dailylogService.getDailyLog(this.dailylogService.selectedUserId).subscribe((response)=>{
      this.dailyLog=response;
    });
  }

  onViewHistory(){
    this.router.navigateByUrl("/dailylog/history");
  }

}
