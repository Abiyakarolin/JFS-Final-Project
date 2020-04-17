import { Component, OnInit } from '@angular/core';
import { MonthlyMeasurementChart } from '../monthly-measurement-chart';
import { MonthlyMeasurementChartService } from '../monthly-measurement-chart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-monthly-measurement-chart',
  templateUrl: './view-monthly-measurement-chart.component.html',
  styleUrls: ['./view-monthly-measurement-chart.component.css']
})
export class ViewMonthlyMeasurementChartComponent implements OnInit {

  monthlyMeasurementChart: MonthlyMeasurementChart;

  constructor(private monthlyMeasurementChartService: MonthlyMeasurementChartService, private router: Router) {
  }

  ngOnInit() {
    this.monthlyMeasurementChartService.getMonthlyMeasurementChart(this.monthlyMeasurementChartService.selectedUserId).subscribe((response)=>{
      this.monthlyMeasurementChart=response;
    });
  }

  onViewHistory(){
    this.router.navigateByUrl("/monthlyMeasurementChart/history");
  }
}