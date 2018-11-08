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
    research = this.cleanResearch(research);
    console.log(research);
    return this.http.post<Research>(this.host+"researches", research);
  }

  cleanResearch(research: Research){
    let questions = research.questions.filter(function(question){
      if(question.question != "") {
        let alternatives = question.alternatives.filter(function(alternative){
          if(alternative.alternative != "") { return alternative; }
        });
        question.alternatives = alternatives;
        return question;
      }
    });

    research.questions = questions;
    return research;
  }
}
