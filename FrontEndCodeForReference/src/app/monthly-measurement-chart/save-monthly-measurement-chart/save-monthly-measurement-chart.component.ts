import { Component, OnInit, OnChanges } from '@angular/core';
import { DietService } from '../../user/diet.service';
import { MonthlyMeasurementChartService } from '../monthly-measurement-chart.service';
import { MonthlyMeasurementChart } from '../monthly-measurement-chart';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-monthly-measurement-chart',
  templateUrl: './save-monthly-measurement-chart.component.html',
  styleUrls: ['./save-monthly-measurement-chart.component.css']
})
export class SaveMonthlyMeasurementChartComponent implements OnInit {

  monthlyMeasurementChart: MonthlyMeasurementChart;
  displayForm: boolean = true;
  dueDate: number;
  monthlyMeasurementChartForm: FormGroup;
  msg: string;
  status: string;
  
  constructor(private dietService:DietService, private monthlyMeasurementChartService:MonthlyMeasurementChartService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
      this.monthlyMeasurementChartService.getMonthlyMeasurementChart(this.dietService.currentUserEmail).subscribe((response)=>{
      if(response){
        this.monthlyMeasurementChart=response;
        this.status = "You have already filled chart for this month. You can now edit the values.";
      }else{
        this.monthlyMeasurementChart = {
          height : null,
          weight: null,
          chest: null,
          waist: null,
          shoulder: null,
          biceps: null,
          forearm: null,
          leg: null,
          thighs: null,
          bmi: null
        }
        this.monthlyMeasurementChartService.getMonthlyMeasurementChartDueDate(this.dietService.currentUserEmail).subscribe((response)=>{
          if(response){
            this.dueDate = response;
            this.status = "You haven't filled monthly chart for this month. Your due date for this month is :"+this.dueDate;
          }else{
            this.displayForm = false;
            this.status = "You haven't been assigned any batch yet. Contact your program admin to assign you batch";
          }
        });
      }
      this.monthlyMeasurementChartForm = this.formBuilder.group({
        'height' : [this.monthlyMeasurementChart.height, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'weight' : [this.monthlyMeasurementChart.weight, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'chest' : [this.monthlyMeasurementChart.chest, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'waist' : [this.monthlyMeasurementChart.waist, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'shoulder' : [this.monthlyMeasurementChart.shoulder, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'biceps': [this.monthlyMeasurementChart.biceps, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'forearm' : [this.monthlyMeasurementChart.forearm, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'leg' : [this.monthlyMeasurementChart.leg, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]],
        'thighs' :[this.monthlyMeasurementChart.thighs, [Validators.required, Validators.pattern('[0-9]{1,3}.[0-9]{0,2}')]]
      });
    });
  }
  
  onSave(){
    if(this.monthlyMeasurementChartForm.valid){
      this.monthlyMeasurementChart = this.monthlyMeasurementChartForm.value;
      const user: User = new User();
      user.userId = this.dietService.currentId;
      this.monthlyMeasurementChart.id = {
        user: user
      }
      this.monthlyMeasurementChart.bmi=Number(((Number(this.monthlyMeasurementChart.weight))/((Number(this.monthlyMeasurementChart.height)/100) * (Number(this.monthlyMeasurementChart.height)/100))).toPrecision(4));
      this.monthlyMeasurementChartService.saveMonthlyMeasurementChart(this.monthlyMeasurementChart).subscribe((response)=>{
        if(response.status === 'SUCCESS'){
          this.msg = 'Monthly Measurement Chart Saved Successfully!';
          this.status = "You have already filled chart for this month. You can now edit the values.";
        }else{
          this.msg = 'Error in saving Monthly Measurement Chart! '+response.status;
        }
      });
      //this.monthlyMeasurementChartForm.reset();
    }
  }

  onViewHistory(){
    this.monthlyMeasurementChartService.selectedUserId=this.dietService.currentUserEmail;
    this.router.navigateByUrl("/monthlyMeasurementChart/history");
  }

  get height(){
    return this.monthlyMeasurementChartForm.get("height");
  }

  get weight(){
    return this.monthlyMeasurementChartForm.get("weight");
  }

  get chest(){
    return this.monthlyMeasurementChartForm.get("chest");
  }

  get waist(){
    return this.monthlyMeasurementChartForm.get("waist");
  }

  get shoulder(){
    return this.monthlyMeasurementChartForm.get("shoulder");
  }

  get biceps(){
    return this.monthlyMeasurementChartForm.get("biceps");
  }

  get forearm(){
    return this.monthlyMeasurementChartForm.get("forearm");
  }

  get leg(){
    return this.monthlyMeasurementChartForm.get("leg");
  }

  get thighs(){
    return this.monthlyMeasurementChartForm.get("thighs");
  }
}
