import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { Resume1Component } from './resume-1/resume-1.component';
import { ProfileService } from './profile.service';
import { SafeHtmlPipe } from './safe-html.pipe';
import { Resume2Component } from './resume-2/resume-2.component';
import { ResumeBaseComponent } from './resume-base/resume-base.component';


@NgModule({
  declarations: [
    AppComponent,
    Resume1Component,
    SafeHtmlPipe,
    Resume2Component,
    ResumeBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
