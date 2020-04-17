import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Message } from './message';
import { Response } from '../response';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  API_URL : string = '/fitme';
  user2 : string;

  constructor(private http : HttpClient) { }

  public saveMessage(message: Message, category: string, target: string): Observable<Response>{
    return this.http.post<Response>(`${this.API_URL}/messages`, message, {
      params: new HttpParams().set("category", category).set("target",target)
    });
  }

  public readUniqueUsers(user1: string):Observable<string[]>{
    return this.http.get<string[]>(`${this.API_URL}/messages`, {
      params: new HttpParams().set("category","user").set("user1",user1)
    });
  }

  public readConversation(user1: string, user2: string): Observable<Message[]>{
    return this.http.get<Message[]>(`${this.API_URL}/messages`, {
      params: new HttpParams().set("category","conversation").set("user1",user1).set("user2",user2)
    });
  }

}
