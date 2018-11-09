import { Injectable } from '@angular/core';
import { Researcher } from '../models/researcher';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResearcherService {

  private host = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  show(): Observable<Array<Researcher>> {
    return this.http.get<Array<Researcher>>(this.host+"researchers/");
  }
}
