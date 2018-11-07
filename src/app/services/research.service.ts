import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Research } from '../models/research';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  private host = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  create(research: Research): Observable<Research> {
    return this.http.post<Research>(this.host+"research", research);
  }
}
