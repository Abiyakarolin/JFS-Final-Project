import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadWeeklyPlanComponent } from './upload-weekly-plan/upload-weekly-plan.component';
import { DownloadWeeklyPlanComponent } from './download-weekly-plan/download-weekly-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UploadWeeklyPlanComponent, DownloadWeeklyPlanComponent],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,RouterModule
  ],
  exports: [UploadWeeklyPlanComponent, DownloadWeeklyPlanComponent]
})
export class WeeklyPlanModule { }
