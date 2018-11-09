import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Record } from './../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private host = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  create(record: Record): Observable<any> {
    console.log(record);
    return this.http.post<void>(this.host+"records", record);
  }
}
