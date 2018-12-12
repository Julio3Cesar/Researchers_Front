import { Component, OnInit } from '@angular/core';
import { Research } from '../../../models/research';
import { ResearchService } from '../../../services/research.service';

@Component({
  selector: 'ngx-my-researches',
  templateUrl: './my-researches.component.html',
  styleUrls: ['./my-researches.component.scss']
})
export class MyResearchesComponent implements OnInit {

  researches: Array<Research>;

  constructor(private researchService: ResearchService) { }

  ngOnInit() {
    let email = localStorage.getItem("email");
    this.researchService.showByEmail(email).subscribe((researches) => {
      this.researches = researches;
    });
  }

  deleteResearch(id: number){
    this.researchService.deleteResearch(id).subscribe((data)=>{
      alert("Success!");
      window.location.reload();
    });;
  }
}
