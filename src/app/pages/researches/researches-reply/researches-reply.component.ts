import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Research } from '../../../models/research';
import { ResearchService } from '../../../services/research.service';

@Component({
  selector: 'ngx-researches-reply',
  templateUrl: './researches-reply.component.html',
  styleUrls: ['./researches-reply.component.scss']
})
export class ResearchesReplyComponent implements OnInit {

  research: Research = new Research();

  constructor(private route: ActivatedRoute, private researchService: ResearchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.params.id;
      this.research.id = id;
    });

    this.researchService.getReply(this.research.id).subscribe((research) => {
      this.research = research;
      console.log(research);
    });

  }

}
