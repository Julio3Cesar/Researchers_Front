import { Component, OnInit } from '@angular/core';
import { ResearcherService } from '../../../services/researcher.service';
import { Router } from "@angular/router"

@Component({
  selector: 'ngx-delete-my-account',
  templateUrl: './delete-my-account.component.html',
  styleUrls: ['./delete-my-account.component.scss']
})
export class DeleteMyAccountComponent implements OnInit {

  constructor(private router: Router, private researcherService: ResearcherService) { }

  ngOnInit() {
  }

  deleteAccount(){
    let email = localStorage.getItem("email");
    this.researcherService.deleteByEmail(email).subscribe(() => {
      alert("Account deleted successfully!");
      localStorage.clear();
      this.router.navigate(['/']);
      window.location.reload();
    });
  }
}
