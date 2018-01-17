import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import { CorporateRouteComponent } from './corporate-route/corporate-route.component';
import { LoginRouteComponent } from './login-route/login-route.component';
import { RegisterRouteComponent } from './register-route/register-route.component';
import { AuthGuard } from './auth.guard';
import { HttpClient } from '@angular/common/http';
import { ServiceGatewayService } from './service-gateway.service';
import { UserService } from './user.service';
import { environment } from './../environments/environment';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CorporateRouteComponent,
  },
  {
    path: 'login',
    component: LoginRouteComponent,
  },
  {
    path: 'register',
    component: RegisterRouteComponent,
  },
  {
    path: 'admin/home',
    component: HomeRouteComponent,
    canActivate: [
      AuthGuard,
    ],
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
    CorporateRouteComponent,
    LoginRouteComponent,
    RegisterRouteComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthGuard,
    HttpClient,
    ProfileService,
    {
      deps: [ HttpClient ],
      provide: ServiceGatewayService,
      useFactory: (http: HttpClient) => {
        return new ServiceGatewayService(environment.production ? '' : 'http://localhost:3000', http);
      },
    },
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
