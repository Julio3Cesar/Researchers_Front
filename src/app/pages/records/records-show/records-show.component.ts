import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Record } from '../../../models/record';
import { RecordService } from '../../../services/record.service';

@Component({
  selector: 'ngx-records-show',
  templateUrl: './records-show.component.html',
  styleUrls: ['./records-show.component.scss']
})
export class RecordsShowComponent implements OnInit {

  records: Array<Record> = new Array<Record>();

  constructor(private route: ActivatedRoute, private recordService: RecordService) { }

  ngOnInit() {
    let researchId;
    this.route.paramMap.subscribe(params => {
      researchId = params.get('id');
    });

    this.recordService.getRecords(researchId).subscribe((records) => {
      console.log(records);
      this.records = records;
    });
  }
}
