import { Component, OnInit } from '@angular/core';
import { Researcher } from '../../../models/researcher';
import { ResearcherService } from '../../../services/researcher.service';
import { Router } from "@angular/router"

@Component({
  selector: 'ngx-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  researcher: Researcher = new Researcher();

  constructor(private router: Router, private researcherService: ResearcherService) { }

  ngOnInit() {
    let email = localStorage.getItem('email');
    this.researcherService.getByEmail(email).subscribe((researcher) => {
      this.researcher = researcher;
    });
  }

  edit(){
    this.researcherService.update(this.researcher).subscribe((researcher) => {
      alert("success update!");
      localStorage.clear();
      this.router.navigate(['/']);
      window.location.reload();
    });
  }

}
