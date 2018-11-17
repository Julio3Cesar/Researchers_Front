import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Research } from '../../../models/research';
import { ResearchService } from '../../../services/research.service';
import { RecordService } from '../../../services/record.service';
import { Record } from '../../../models/record';
import { Alternative } from '../../../models/alternative';
import { Router } from "@angular/router"

@Component({
  selector: 'ngx-researches-reply',
  templateUrl: './researches-reply.component.html',
  styleUrls: ['./researches-reply.component.scss']
})
export class ResearchesReplyComponent implements OnInit {

  research: Research = new Research();
  private record = new Record();
  recordIsInvalid: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute, private researchService: ResearchService, private recordService: RecordService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.research.id = (id == null) ? 0 : id;
    });

    this.researchService.getReply(this.research.id).subscribe((research) => {
      this.research = research;
    });
  }

  saveRecord(){
    this.record.research = this.research;
    this.recordService.create(this.record).subscribe(() => {
      alert("Record saved successfully!");
      this.router.navigate(['/']);
    });
  }

  selectAlternative(alternative, question){
    for(let alternative of question.alternatives) {
      this.record.alternatives.filter((record) => {
        if(record.id == alternative.id) {
          let index = this.record.alternatives.indexOf(record);
          this.record.alternatives.splice(index, 1);
        }
      });
    }

    this.record.alternatives.push(alternative);
    this.recordIsInvalid = !this.recordIsValid();
  }

  private recordIsValid(): boolean{
    return this.research.questions.length == this.record.alternatives.length;
  }
}
