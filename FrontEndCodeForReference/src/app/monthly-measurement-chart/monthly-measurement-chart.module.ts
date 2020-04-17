import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SaveMonthlyMeasurementChartComponent } from './save-monthly-measurement-chart/save-monthly-measurement-chart.component';
import { ViewMonthlyMeasurementChartComponent } from './view-monthly-measurement-chart/view-monthly-measurement-chart.component';
import { ViewMonthlyMeasurementChartHistoryComponent } from './view-monthly-measurement-chart-history/view-monthly-measurement-chart-history.component';
import { MonthlyMeasurementChartUserListComponent } from './monthly-measurement-chart-user-list/monthly-measurement-chart-user-list.component';



@NgModule({
  declarations: [SaveMonthlyMeasurementChartComponent, ViewMonthlyMeasurementChartComponent, ViewMonthlyMeasurementChartHistoryComponent, MonthlyMeasurementChartUserListComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [SaveMonthlyMeasurementChartComponent, ViewMonthlyMeasurementChartComponent, ViewMonthlyMeasurementChartHistoryComponent, MonthlyMeasurementChartUserListComponent]
})
export class MonthlyMeasurementChartModule { }
