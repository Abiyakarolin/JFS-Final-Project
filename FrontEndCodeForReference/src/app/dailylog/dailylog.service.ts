import { Injectable } from '@angular/core';
import { Dailylog } from './dailylog';
import { HttpClient , HttpParams } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Status } from '../status';
import {  Response } from '../response';

@Injectable({
  providedIn: 'root'
})
export class DailylogService {

  API_URL : string = "/fitme"
  selectedUserId: string;

  constructor(private http: HttpClient) { }

  public saveDailyLog(dailylog: Dailylog): Observable<Response>{
    return this.http.post<Response>(`${this.API_URL}/dailyLogs`,dailylog);
  }

  public getDailyLog(userid: string): Observable<Dailylog>{
    return this.http.get<Dailylog>(`${this.API_URL}/dailyLog`,{
      params: new HttpParams().set("category","user").set("id", userid)
    });
  }

  public getDailyLogStatus(groupid: string): Observable<Status[]>{
    return this.http.get<Status[]>(`${this.API_URL}/dailyLog`,{
      params: new HttpParams().set("category","group").set("id", groupid)
    });
  }
  public getDailyLogHistory(userid: string):Observable<Dailylog[]>{
    return this.http.get<Dailylog[]>(`${this.API_URL}/dailyLogs`,{
      params: new HttpParams().set("userid",userid)
    })
  }
}
