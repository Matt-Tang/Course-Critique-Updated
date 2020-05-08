import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BiographyComponent } from './biography/biography.component';
import { TransferInfoComponent } from './transfer-info/transfer-info.component';
import { UniversityInfoComponent } from './university-info/university-info.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseSearchComponent } from './course-search/course-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BiographyComponent,
    TransferInfoComponent,
    UniversityInfoComponent,
    ContactMeComponent,
    CarouselComponent,
    CoursesComponent,
    CourseDetailComponent,
    CourseSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
