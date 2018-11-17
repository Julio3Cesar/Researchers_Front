import { Component, OnInit } from '@angular/core';
import { Research } from '../../../models/research';
import { ResearchService } from '../../../services/research.service';

@Component({
  selector: 'ngx-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.scss']
})
export class ResearchesComponent implements OnInit {

  researches: Array<Research>;

  constructor(private researchService: ResearchService) { }

  ngOnInit() {
    let email = localStorage.getItem("email");
    this.researchService.showByEmail(email).subscribe((researches) => {
      this.researches = researches;
    });
  }

}
