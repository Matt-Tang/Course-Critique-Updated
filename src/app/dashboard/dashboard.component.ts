import { Component, OnInit } from '@angular/core';
import { Term } from '../term';
import { TermService } from '../term.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  terms: Term[] = [];

  constructor(private termService: TermService) { }

  ngOnInit() {
    this.getTerms();
  }

  getTerms(): void {
    this.termService.getTerms()
      .subscribe(terms => this.terms = terms);
  }
}