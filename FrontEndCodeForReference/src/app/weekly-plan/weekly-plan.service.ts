import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../response';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { WeeklyPlan } from './weekly-plan';

@Injectable({
  providedIn: 'root'
})
export class WeeklyPlanService {

  API_URL : string = "/fitme";

  constructor(private http : HttpClient) { }

  public uploadWeeklyPlan(weeklyPlan: WeeklyPlan):Observable<Response>{
    return this.http.post<Response>(`${this.API_URL}/plans`,weeklyPlan.file,{
      params: new HttpParams().set('groupid', weeklyPlan.groupsId.groupsId)
      //headers: new HttpHeaders().set("Content-Type","multipart/form-data")
    });
  }

  public weeklyPlanList(userid: string):Observable<string[]>{
    return this.http.get<string[]>(`${this.API_URL}/plans`,{
      params: new HttpParams().set('userid', userid)
    });
  }
  public downloadWeeklyPlan(id: string):Observable<HttpResponse<Blob>>{
    return this.http.get(`${this.API_URL}/plans/${id}`
    ,{
      observe: 'response',
      responseType: 'blob'
    }
    );
  }

}
