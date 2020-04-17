import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonthlyMeasurementChart } from './monthly-measurement-chart';
import { Status } from '../status';
import { Response } from '../response';

@Injectable({
  providedIn: 'root'
})
export class MonthlyMeasurementChartService {

  baseUrl:string="/fitme";
  selectedUserId: string;

  constructor(private httpClient: HttpClient) { }

  public saveMonthlyMeasurementChart(monthlyMeasurementChart: MonthlyMeasurementChart):Observable<Response>{
    return this.httpClient.post<Response>(`${this.baseUrl}/monthlyMeasurementCharts`, monthlyMeasurementChart);
  }

  public getMonthlyMeasurementChartHistory(userid: string):Observable<MonthlyMeasurementChart[]>{
    return this.httpClient.get<MonthlyMeasurementChart[]>(`${this.baseUrl}/monthlyMeasurementCharts`,{
      params: new HttpParams().set("userid", userid)
    });
  }

  public getMonthlyMeasurementChart(userid: string):Observable<MonthlyMeasurementChart>{
    return this.httpClient.get<MonthlyMeasurementChart>(`${this.baseUrl}/monthlyMeasurementChart`,{
      params: new HttpParams().set("category","user").set("id", userid)
    });
  }

  public getMonthlyMeasurementChartStatus(groupid: string):Observable<Status[]>{
    return this.httpClient.get<Status[]>(`${this.baseUrl}/monthlyMeasurementChart`,{
      params: new HttpParams().set("category","group").set("id", groupid)
    });
  }

  public getMonthlyMeasurementChartDueDate(userid: string):Observable<number>{
    return this.httpClient.get<number>(`${this.baseUrl}/monthlyMeasurementChartDate`,{
      params: new HttpParams().set("userid", userid)
    });
  }
}