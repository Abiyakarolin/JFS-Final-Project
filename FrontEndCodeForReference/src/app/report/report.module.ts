import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list/report-list.component';
import { RouterModule } from '@angular/router';
import { DailylogModule } from '../dailylog/dailylog.module';
import { MonthlyMeasurementChartModule } from '../monthly-measurement-chart/monthly-measurement-chart.module';



@NgModule({
  declarations: [ReportListComponent],
  imports: [CommonModule, RouterModule, DailylogModule, MonthlyMeasurementChartModule],
  exports: [ReportListComponent]
})
export class ReportModule { }
