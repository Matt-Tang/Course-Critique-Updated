import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../mock-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = COURSES;
  selectedCourse: Course;
  displayCourse: boolean;

  constructor() { }

  ngOnInit(): void {
    this.displayCourse = true;
  }

  onSelect(course : Course): void {
    this.selectedCourse = course;
    this.displayCourse = !this.displayCourse;
  }

}
