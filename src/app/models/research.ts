import { Question } from './question';
import { Researcher } from './researcher';

export class Research {
  id;
  title: String = "";
  questions: Array<Question> = [new Question()];
  researcher: Researcher = new Researcher();

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
