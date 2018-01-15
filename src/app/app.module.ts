import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { Resume1Component } from './resume-1/resume-1.component';
import { ProfileService } from './profile.service';
import { SafeHtmlPipe } from './safe-html.pipe';
import { Resume2Component } from './resume-2/resume-2.component';
import { ResumeBaseComponent } from './resume-base/resume-base.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { ResumeRouteComponent } from './resume-route/resume-route.component';
import { Resume3Component } from './resume-3/resume-3.component';
import { Resume4Component } from './resume-4/resume-4.component';
import { Resume5Component } from './resume-5/resume-5.component';
import { LineBreakPipe } from './line-break.pipe';

const appRoutes: Routes = [
  {
    path: 'admin/home',
    component: HomeRouteComponent,
  },
  {
    path: ':id',
    component: ResumeRouteComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    Resume1Component,
    SafeHtmlPipe,
    Resume2Component,
    ResumeBaseComponent,
    HomeRouteComponent,
    ResumeRouteComponent,
    Resume3Component,
    Resume4Component,
    Resume5Component,
    LineBreakPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
