import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  selectedCourse: Course;
  displayCourse: boolean;

  constructor(
    private courseService: CourseService,
    private location : Location,
    private route : ActivatedRoute,
    private router: Router
  ) 
  { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log(this.route.snapshot.paramMap.get('level'))
        this.getCoursesForLevel();
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
      }
    });
  }

  ngOnInit(): void {
    this.displayCourse = true;
    this.getCoursesForLevel();
  }

  onSelect(course : Course): void {
    this.selectedCourse = course;
    this.displayCourse = !this.displayCourse;
  }

  getCoursesForLevel(): void {
    const level = this.route.snapshot.paramMap.get('level');
    if(level === 'all'){
      this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
    } else {
      this.courseService.getCoursesBasedOnLevel(level)
      .subscribe(courses => this.courses = courses);
    }
  }

  goBackToDashboard(): void {
    this.location.back();
  }

}
