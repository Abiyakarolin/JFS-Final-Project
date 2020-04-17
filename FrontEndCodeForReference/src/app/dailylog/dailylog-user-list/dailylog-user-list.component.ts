import { Component, OnInit } from '@angular/core';
import { DailylogService } from '../dailylog.service';
import { Groups } from '../../batch/groups';
import { Batch } from '../../batch/batch';
import { BatchService } from '../../batch/batch.service';
import { Router } from '@angular/router';
import { Status } from '../../status';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DietService } from '../../user/diet.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-dailylog-user-list',
  templateUrl: './dailylog-user-list.component.html',
  styleUrls: ['./dailylog-user-list.component.css']
})
export class DailylogUserListComponent implements OnInit {

  status: Status[];
  batches: Batch[];
  groups: Groups[];
  criteriaForm: FormGroup;
  isBatchSelected: boolean = false;
  isGroupSelected: boolean = false;
  motivator: User;

  constructor(private dailylogService: DailylogService, private batchService: BatchService, private router: Router,
    private fb: FormBuilder, private dietService: DietService) { }

  ngOnInit() {
    if(this.dietService.userRole==='Motivator'){
      this.dietService.getUserWithEmail(this.dietService.currentUserEmail).subscribe(response=>{
        this.motivator = response;
        if(response.groupsId){
          this.batches = [response.groupsId.batch];
        }      
      });
    }
    else{
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
      this.dailylogService.getDailyLogStatus(groupid).subscribe((response)=>{
        this.status = response;
        this.isGroupSelected=true;
      });
    }else{
        this.isGroupSelected=false;
        this.status = null;
    }
  }

  onUserSelect(userid: string){
    this.dailylogService.selectedUserId=userid;
    this.router.navigateByUrl("/dailylog/view");
  }

}
