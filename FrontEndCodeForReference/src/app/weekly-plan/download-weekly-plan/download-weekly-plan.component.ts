import { Component, OnInit } from '@angular/core';
import { WeeklyPlanService } from '../weekly-plan.service';
import { DietService } from '../../user/diet.service';
import * as fileSaver from 'file-saver';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-download-weekly-plan',
  templateUrl: './download-weekly-plan.component.html',
  styleUrls: ['./download-weekly-plan.component.css']
})
export class DownloadWeeklyPlanComponent implements OnInit {

  isWeekSelected: boolean =false;
  weeks: string[];
  selectedWeek: string;

  constructor(private weeklyPlanService: WeeklyPlanService, private dietService: DietService) { }

  ngOnInit() {
    this.weeklyPlanService.weeklyPlanList(this.dietService.currentUserEmail).subscribe((response)=>{
      this.weeks = response;
    });
  }

  onSelectChange(selectedWeek: string){
    if(selectedWeek !== 'Select'){
      this.selectedWeek=selectedWeek;
    }else{
      this.selectedWeek=null;
    }
  }

  onDownload(){
    this.weeklyPlanService.downloadWeeklyPlan(this.selectedWeek).subscribe((response)=>{
      const filename = response.headers.get('filename');
      const filetype = response.headers.get('filetype');
      const cc = response.headers.get('Content-Disposition');
      const blob = new Blob([response.body]);//, {type: 'text/csv; charset=utf-8'});
      fileSaver.saveAs(blob, filename);
    });
  }

}
