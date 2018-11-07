import { Component } from '@angular/core';
import { Question } from '../../../models/question';
import { Research } from '../../../models/research';
import { ResearchService } from '../../../services/research.service';

@Component({
  selector: 'ngx-researches-create',
  templateUrl: './researches-create.component.html',
  styleUrls: ['./researches-create.component.scss']
})
export class ResearchesCreateComponent {

  research: Research  = new Research();
  researchIsValid: boolean = true;

  constructor(private researchService: ResearchService) { }

  onChange(questionIndex){
    let last: number = this.research.questions[questionIndex].alternatives.length;
    let alternatives = this.research.questions[questionIndex].alternatives;
    if(alternatives[last - 1] != "") {
      alternatives[last]= "";
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
    this.researchService.create(this.research).subscribe(() => { alert('oi'); });
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
