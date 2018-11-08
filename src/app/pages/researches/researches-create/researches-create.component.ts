import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/question';
import { Alternative } from '../../../models/alternative';
import { Research } from '../../../models/research';
import { ResearchService } from '../../../services/research.service';

@Component({
  selector: 'ngx-researches-create',
  templateUrl: './researches-create.component.html',
  styleUrls: ['./researches-create.component.scss']
})
export class ResearchesCreateComponent implements OnInit{

  research: Research  = new Research();
  researchIsValid: boolean = true;

  constructor(private researchService: ResearchService) { }

  ngOnInit(){
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
    this.researchIsValid = this.research.isInvalid();
    let last: number = this.research.questions.length;
    if(this.research.questions[last - 1].question == "") { return; }
    if(this.research.questions[last - 1].notPermitNextAlternative()) { return; }

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
}
