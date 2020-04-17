import { Component, OnInit } from '@angular/core';
import { MonthlyMeasurementChart } from '../monthly-measurement-chart';
import { MonthlyMeasurementChartService } from '../monthly-measurement-chart.service';

@Component({
  selector: 'app-view-monthly-measurement-chart-history',
  templateUrl: './view-monthly-measurement-chart-history.component.html',
  styleUrls: ['./view-monthly-measurement-chart-history.component.css']
})
export class ViewMonthlyMeasurementChartHistoryComponent implements OnInit {

  monthlyMeasurementCharts: MonthlyMeasurementChart[];

  constructor(private monthlyMeasurementChartService: MonthlyMeasurementChartService) { }

  ngOnInit() {
    this.monthlyMeasurementChartService.getMonthlyMeasurementChartHistory(this.monthlyMeasurementChartService.selectedUserId).subscribe((response)=>{
      this.monthlyMeasurementCharts = response;
      
    });
  }

}
