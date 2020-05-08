import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  selectedCourse: Course;
  displayCourse: boolean;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.displayCourse = true;
    this.getCourses();
  }

  onSelect(course : Course): void {
    this.selectedCourse = course;
    this.displayCourse = !this.displayCourse;
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

}
