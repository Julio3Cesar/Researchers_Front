import { Alternative } from './alternative';
import { Research } from './research';

export class Record {
  research: Research;
  alternatives: Array<Alternative> = [];
}
