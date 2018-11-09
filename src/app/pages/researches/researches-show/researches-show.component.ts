import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../../../services/research.service';
import { Research } from '../../../models/research';
import { Researcher } from '../../../models/researcher';
import { Router } from "@angular/router"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-researches-show',
  templateUrl: './researches-show.component.html',
  styleUrls: ['./researches-show.component.scss']
})
export class ResearchesShowComponent implements OnInit {

  researcher: Researcher = new Researcher();
  researches: Array<Research>;

  constructor(private route: ActivatedRoute, private router: Router, private researchService: ResearchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.params.id;
      this.researcher.id = id;
    });
    this.researchService.show(this.researcher.id).subscribe((researches) => {
      this.researches = researches;
    });
  }

  replyResearch(research){
    this.router.navigate(['researches/reply', research.id])
  }

}
