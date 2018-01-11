import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { Resume1Component } from './resume-1/resume-1.component';
import { ProfileService } from './profile.service';


@NgModule({
  declarations: [
    AppComponent,
    Resume1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgDatepickerModule,
  ],
  providers: [
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
