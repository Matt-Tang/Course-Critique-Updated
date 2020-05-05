import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BiographyComponent } from './biography/biography.component';
import { TransferInfoComponent } from './transfer-info/transfer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BiographyComponent,
    TransferInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
