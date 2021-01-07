import { Injectable } from '@angular/core';
import { Term } from './term';
import { TERMS } from './mock-terms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermService {

  constructor() { }

  getTerms(): Observable<Term[]>{
    return of(TERMS);
  }

  getTerm(id: number): Observable<Term> {
    // TODO: send the message _after_ fetching the term
    return of(TERMS.find(term => term.id === id));
  }
}
