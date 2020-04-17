import { Component, OnInit } from '@angular/core';
import { Batch } from '../../batch/batch';
import { Groups } from '../../batch/groups';
import {  WeeklyPlan } from '../weekly-plan';
import { WeeklyPlanService } from '../weekly-plan.service';
import { BatchService } from '../../batch/batch.service';

@Component({
  selector: 'app-upload-weekly-plan',
  templateUrl: './upload-weekly-plan.component.html',
  styleUrls: ['./upload-weekly-plan.component.css']
})
export class UploadWeeklyPlanComponent implements OnInit {

  batches: Batch[];
  groups: Groups[];
  isBatchSelected: boolean = false;
  isGroupSelected: boolean = false;
  isFileSelected: boolean = false;
  msg: string;
  weeklyPlan: WeeklyPlan = new WeeklyPlan();

  constructor(private weeklyPlanService: WeeklyPlanService, private batchService: BatchService) { }

  ngOnInit() {
    this.batchService.getAllBatches().subscribe((response)=>{
      this.batches = response;
    });
  }

  onBatchChange(batchid: string){
    if(batchid!=='Select Batch'){
      this.batchService.getAllGroupsOfABatch(batchid).subscribe((response)=>{
        this.groups = response;
        this.isBatchSelected=true;
        this.weeklyPlan.groupsId={
          groupsId:null,
          batch:{
            batchId:batchid
          }
        }
      });
    }else{
      this.weeklyPlan.groupsId=null;
      this.isGroupSelected=false;
    }
  }

  onGroupChange(groupid: string){
    if(groupid!=='Select Group'){
      this.isGroupSelected=true;
      this.weeklyPlan.groupsId.groupsId=groupid;
    }else{
      this.isGroupSelected=false;
      this.weeklyPlan.groupsId.groupsId=null;
    }
  }

  onFileChange(files: FileList){
    this.weeklyPlan.file = new FormData();
    this.weeklyPlan.file.append('file', files.item(0), files.item(0).name);
    this.isFileSelected = true;
  }

  onUpload(){
    this.weeklyPlanService.uploadWeeklyPlan(this.weeklyPlan).subscribe((response)=>{
      if(response.status === 'SUCCESS'){
        this.msg = 'File Uploaded Successfully';
      }else{
        this.msg = 'File Could Not Be Uploaded';
      }
    });
  }

}
