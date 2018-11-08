import { Alternative } from './alternative';

export class Question {
  question: String = "";
  alternatives: Array<Alternative> = [new Alternative(), new Alternative()];

  isInvalid(): boolean {
    if(this.question != ""){
      if(this.notPermitNextAlternative()){
        return true;
      }
    } else {
      let isEmpty = this.alternatives.filter(function(alternative){
        if(alternative.alternative == "") { return "vazio"; }
      });

      if(this.alternatives.length != isEmpty.length) {
        return true;
      }
    }

    return false;
  }

  notPermitNextAlternative(){
    let notEmpty = this.alternatives.filter(function(alternative){
      if(alternative.alternative != "") { return alternative; }
    });

    return notEmpty.length < 2;
  }
}
