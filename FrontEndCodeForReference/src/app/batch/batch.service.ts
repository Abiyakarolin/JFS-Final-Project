import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batch } from './batch';
import { HttpClient } from '@angular/common/http';
import { Groups } from './groups';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  API_URL : string = '/fitme';

  constructor(private http : HttpClient) { }

  public getAllBatches():Observable<Batch[]>{
    return this.http.get<Batch[]>(`${this.API_URL}/batches`);
  }

  public getAllGroupsOfABatch(batchId: string):Observable<Groups[]>{
    return this.http.get<Groups[]>(`${this.API_URL}/batches/${batchId}/groups`);
  }

}
