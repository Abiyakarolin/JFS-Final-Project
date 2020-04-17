import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { Batch } from '../batch';
import { Groups } from '../groups';
import { DietService } from '../../user/diet.service';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-assign-batch',
  templateUrl: './assign-batch.component.html',
  styleUrls: ['./assign-batch.component.css']
})
export class AssignBatchComponent implements OnInit {

  users: User[] = null;
  batches: Batch[] =  null;
  groups: Groups[] = null;
  msg: string;

  constructor(private batchService : BatchService, private dietService : DietService) { }

  ngOnInit(): void {

    this.dietService.getAllUsersWithNoGroup().subscribe( (result) =>{
      this.users = result;
    });

    this.batchService.getAllBatches().subscribe ( (result) => {
      this.batches = result;
    });
  }

  onBatchSelect(batch: string, user: User){

    user.groupsId = null;
    this.groups = null;
    
    if(batch !== 'Select Batch'){
      user.groupsId = {
        groupsId:null,
        batch:{
          batchId:batch
        }
      }
      this.batchService.getAllGroupsOfABatch(batch).subscribe((result)=>{
        
        this.groups = result;
      });
    }else{
      user.groupsId = null;
      this.groups = null;
    }
  }

  onGroupSelect(group: string, user: User){
    if(group !== 'Select Group'){
      user.groupsId.groupsId=group;
    }else{
      user.groupsId.groupsId=null;
    }
  }

  onAssign(user: User){
    this.dietService.editUser(user).subscribe((response)=>{
      if(response.status === 'SUCCESS'){
        this.msg=`Batch Assigned To ${user.fullname}`;
        this.dietService.getAllUsersWithNoGroup().subscribe((result)=>{
          this.users = result;
        });
      }else {
        this.msg=`Could Not Assign Batch To  ${user.fullname}. ${response.status}`;
      }
    });
  }
}
