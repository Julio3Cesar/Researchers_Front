import { Question } from './question';

export class Research {
  title: String = "";
  questions: Array<Question> = [new Question()];

  isInvalid(): boolean {
    if(this.title == "") {
      return true;
    }

    for(let question of this.questions){
      if(question.isInvalid()){
        return true;
      }else {
        if(this.questions.length == 1){
          return true;
        }
      }
    }

    return false;
  }
}
