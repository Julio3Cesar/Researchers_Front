import { Alternative } from './alternative';
import { Research } from './research';

export class Record {
  research: Research = new Research();
  alternatives: Array<Alternative> = [];
}
