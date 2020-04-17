import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donate } from './donate';
import { Observable } from 'rxjs';
import { Response } from '../response';

@Injectable({
  providedIn: 'root'
})
export class DonateService {

  API_URL:string="/fitme";

  constructor(private http: HttpClient) { }

  donate(donation: Donate):Observable<Response>{
    return this.http.post<Response>(`${this.API_URL}/donate`,donation);
  }
}
