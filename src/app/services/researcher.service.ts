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

  deleteByEmail(email: string) {
    return this.http.post<any>(this.host+"researchers/delete/" + email,"body");
  }

  getByEmail(email: string) {
    return this.http.get<any>(this.host+"researchers/byemail/" + email);
  }

  update(researcher) {
    return this.http.post<any>(this.host+"researchers/sign-up/", researcher);
  }
}
