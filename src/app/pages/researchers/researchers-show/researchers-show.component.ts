import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResearcherService } from '../../../services/researcher.service';
import { Researcher } from '../../../models/researcher';

@Component({
  selector: 'ngx-researchers-show',
  templateUrl: './researchers-show.component.html',
  styleUrls: ['./researchers-show.component.scss']
})
export class ResearchersShowComponent implements OnInit {

  researchers: Array<Researcher> = [new Researcher()];

  constructor(private route: ActivatedRoute, private researcherService: ResearcherService) { }

  ngOnInit() {
    this.researcherService.show().subscribe((researchers) => {
      this.researchers = researchers;
    });
  }

}
