import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './mock-courses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<Course[]>{
    return of(COURSES);
  }

  getCourse(id: number): Observable<Course> {
    // TODO: send the message _after_ fetching the hero
    return of(COURSES.find(course => course.id === id));
  }

  // /* GET courses whose name contains search term */
  // searchHeroes(term: string): Observable<Course[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Course[]>(`${this.heroesUrl}/?name=${term}`);

  //   return this.get
  // }
}
