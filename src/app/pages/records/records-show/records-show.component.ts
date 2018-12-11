import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Record } from '../../../models/record';
import { Research } from '../../../models/research';
import { RecordService } from '../../../services/record.service';
import { ResearchService } from '../../../services/research.service';

@Component({
  selector: 'ngx-records-show',
  templateUrl: './records-show.component.html',
  styleUrls: ['./records-show.component.scss']
})
export class RecordsShowComponent implements OnInit {

  records: Array<Record> = new Array<Record>();
  research: Research = new Research();

  constructor(private route: ActivatedRoute, private recordService: RecordService, private researchService: ResearchService) { }

  ngOnInit() {
    let researchId;
    this.route.paramMap.subscribe(params => {
      researchId = params.get('id');
    });

    this.researchService.getReply(researchId).subscribe((research) => {
      this.research = research;
    });

    this.recordService.getRecords(researchId).subscribe((records) => {
      this.records = records;
    });

  }

  frequencyOnRecord(id: number){
    var num: number = 0;
    for (let record of this.records) {
      for(let alternative of record.alternatives){
        if(alternative.id == id){
          num = num ? num + 1 : 1;
        }
      }
    }
    return num;
  }
}
