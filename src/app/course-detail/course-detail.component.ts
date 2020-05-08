import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course : Course;

  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private courseService : CourseService
  ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
  }

  goBack(): void {
    this.location.back();
  }

  goUwFlow(): void {
    let course = this.course.courseNum.replace(/\s/g, "");
    let base = `https://uwflow.com/course/`;
    let uwFlowLink = base.concat(course.toString());
    window.open(uwFlowLink, "_blank");
  }

}
