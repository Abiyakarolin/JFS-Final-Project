import { Component, OnInit } from '@angular/core';
import { Status } from '../../status';
import { Groups } from '../../batch/groups';
import { Batch } from '../../batch/batch';
import { MonthlyMeasurementChartService } from '../monthly-measurement-chart.service';
import { BatchService } from '../../batch/batch.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DietService } from '../../user/diet.service';
import { User } from '../../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-measurement-chart-user-list',
  templateUrl: './monthly-measurement-chart-user-list.component.html',
  styleUrls: ['./monthly-measurement-chart-user-list.component.css']
})
export class MonthlyMeasurementChartUserListComponent implements OnInit {

  status: Status[];
  batches: Batch[];
  groups: Groups[];
  isBatchSelected: boolean = false;
  isGroupSelected: boolean = false;
  motivator: User;

  constructor(private dietService: DietService, private monthlyMeasurementChartService: MonthlyMeasurementChartService, private batchService: BatchService, private router: Router) { }

  ngOnInit() {
    if(this.dietService.userRole==='Motivator'){
      this.dietService.getUserWithEmail(this.dietService.currentUserEmail).subscribe(response=>{
        this.motivator = response;
        if(response.groupsId){
          this.batches = [response.groupsId.batch];
        }      
      });
    }else{
      this.batchService.getAllBatches().subscribe((response)=>{
        this.batches = response;
      });
    }
  }

  onBatchChange(batchid: string){
    if(batchid!=='Select Batch'){
      if(this.dietService.userRole === 'Motivator'){
        this.groups = [this.motivator.groupsId];
        this.isBatchSelected=true;
      }else{
        this.batchService.getAllGroupsOfABatch(batchid).subscribe((response)=>{
          this.groups = response;
          this.isBatchSelected=true;
        });
     }
    }else{
      this.isBatchSelected=false;
      this.isGroupSelected=false;
      this.status = null;
    }
  }

  onGroupChange(groupid: string){
    if(groupid!=='Select Group'){
      this.monthlyMeasurementChartService.getMonthlyMeasurementChartStatus(groupid).subscribe((response)=>{
        this.status = response;
        this.isGroupSelected=true;
      });
    }else{
      this.isGroupSelected=false;
      this.status = null;
    }
  }

  onUserSelect(userid: string){
    this.monthlyMeasurementChartService.selectedUserId=userid;
    this.router.navigateByUrl("/monthlyMeasurementChart/view");
  }
}