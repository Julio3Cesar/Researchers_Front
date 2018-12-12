import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/question';
import { Alternative } from '../../../models/alternative';
import { Research } from '../../../models/research';
import { ResearchService } from '../../../services/research.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-researches-create',
  templateUrl: './researches-create.component.html',
  styleUrls: ['./researches-create.component.scss']
})
export class ResearchesCreateComponent implements OnInit{

  research: Research  = new Research();
  researchIsValid: boolean = true;

  constructor(private route: ActivatedRoute, private researchService: ResearchService) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id != null && +id != 0){
        this.researchService.getReply(+id).subscribe((research) => {
          this.research = research as Research;
        });
      }
    });

    this.research.researcher.email = localStorage.getItem("email");
  }

  onChange(questionIndex){
    let last: number = this.research.questions[questionIndex].alternatives.length;
    let alternatives = this.research.questions[questionIndex].alternatives;
    if(alternatives[last - 1].alternative != "") {
      alternatives[last] = new Alternative();
    }

    this.onChangeQuestion();
  }

  onChangeQuestion(){
    this.researchIsValid = this.isInvalid();
    let last: number = this.research.questions.length;
    if(this.research.questions[last - 1].question == "") { return; }
    if(this.notPermitNextAlternative(this.research.questions[last - 1].alternatives)) { return; }

    this.research.questions.push(new Question());
  }

  createResearch(){
    this.researchService.create(this.research).subscribe(() => {
      alert('Research successfully registered');
      this.research = new Research();
    });
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  isInvalid(): boolean {
    if(this.research.title == "") {
      return true;
    }

    for(let question of this.research.questions){
      if(this.questionIsInvalid(question)){
        return true;
      }else {
        if(this.research.questions.length == 1){
          return true;
        }
      }
    }

    return false;
  }

  questionIsInvalid(question): boolean {
    if(question.question != ""){
      if(this.notPermitNextAlternative(question.alternatives)){
        return true;
      }
    } else {
      let isEmpty = question.alternatives.filter(function(alternative){
        if(alternative.alternative == "") { return "vazio"; }
      });

      if(question.alternatives.length != isEmpty.length) {
        return true;
      }
    }

    return false;
  }

  notPermitNextAlternative(alternatives){
    let notEmpty = alternatives.filter(function(alternative){
      if(alternative.alternative != "") { return alternative; }
    });

    return notEmpty.length < 2;
  }

}
