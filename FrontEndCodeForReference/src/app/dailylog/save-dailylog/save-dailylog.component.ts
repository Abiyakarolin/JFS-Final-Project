import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DietService } from '../../user/diet.service';
import { Router } from '@angular/router';
import { Dailylog } from '../dailylog';
import { DailylogService } from '../dailylog.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-save-dailylog',
  templateUrl: './save-dailylog.component.html',
  styleUrls: ['./save-dailylog.component.css']
})
export class SaveDailylogComponent implements OnInit {

  saveDailyLogForm: FormGroup;
  dailyLog?: Dailylog;
  msg: string;
  displayForm: boolean = true;
 
  constructor(private dietService:DietService, private dailylogService:DailylogService, private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {

    this.dailylogService.getDailyLog(this.dietService.currentUserEmail).subscribe((response)=>{
      if(response){
        this.dailyLog = response;
      }else{
        this.dailyLog = {
          breakfast:"",
          lunch:"",
          dinner:"",
          vegetablesConsumed:"",
          fruitsConsumed:"",
          workoutDone:""
        }
      }
      this.dietService.getUserWithEmail(this.dietService.currentUserEmail).subscribe((response)=>{
        if(response.groupsId){
          this.saveDailyLogForm = this.formBuilder.group({
            "breakfast": [this.dailyLog.breakfast, [Validators.required]],
            "lunch":[this.dailyLog.lunch, [Validators.required]],
            "dinner":[this.dailyLog.dinner, [Validators.required]],
            "fruitsConsumed":[this.dailyLog.fruitsConsumed, [Validators.required]],
            "vegetablesConsumed":[this.dailyLog.vegetablesConsumed, [Validators.required]],
            "workoutDone":[this.dailyLog.workoutDone, [Validators.required]],
          });
        }else{
          this.displayForm = false;
        }
      });
     });
  }

  get breakfast(){
    return this.saveDailyLogForm.get("breakfast");
  }

  get lunch(){
    return this.saveDailyLogForm.get("lunch");
  }

  get dinner(){
    return this.saveDailyLogForm.get("dinner");
  }

  get fruitsConsumed(){
    return this.saveDailyLogForm.get("fruitsConsumed");
  }

  get vegetablesConsumed(){
    return this.saveDailyLogForm.get("vegetablesConsumed");
  }

  get workoutDone(){
    return this.saveDailyLogForm.get("workoutDone");
  }

  onSave(){
    if(this.saveDailyLogForm.valid){
      this.dailyLog=this.saveDailyLogForm.value;
      const user= new User();
      user.userId=this.dietService.currentId;
      this.dailyLog.dailyLogKey = {
        user: user
      }
      this.dailylogService.saveDailyLog(this.dailyLog).subscribe((response)=>{
        if(response.status === 'SUCCESS'){
          this.msg="Daily Log Saved Successfully!";
        }else{
          this.msg="Error in Saving Daily Log As "+response.status;
        }
      })
    }
  }

  onViewHistory(){
    this.dailylogService.selectedUserId=this.dietService.currentUserEmail;
    this.router.navigateByUrl("/dailylog/history");
  }

}
