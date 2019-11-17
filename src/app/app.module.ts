import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";

import { Industriradhus } from '../app/app';
import { ProjectPage } from '../pages/project/project';
import { UnitPage } from '../pages/unit/unit';
import { AboutPage } from '../pages/about/about';
import { SignInPage } from './../pages/sign-in/sign-in';

import { HeaderComponent } from './../components/header/header';
import { ImageModalComponent } from './../components/image-modal/image-modal';
import { AccessGuardService } from './../core/auth-guard';
import { SignInInterceptor } from './../core/token-interceptor';

import { TruncatePipe } from '../pipe/truncatepipe';

import { AuthProvider } from './../providers/auth';
import { UnitProvider } from './../providers/unit';
import { ProjectProvider } from './../providers/project';
import { SalesAgentProvider } from './../providers/sales-agent';
import { TokenInterceptor } from '../core/token-interceptor';



@NgModule({
  declarations: [
    Industriradhus,
    AboutPage,
    ProjectPage,
    UnitPage,
    SignInPage,
    HeaderComponent,
    ImageModalComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: 'home', component: ProjectPage },
      { path: 'sign-in', component: SignInPage },
      { path: 'kontakt', component: AboutPage },
      { path: 'enhet/:id', component: UnitPage },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [
    ProjectProvider, 
    UnitProvider,
    SalesAgentProvider,
    AuthProvider,
    AccessGuardService,
    {
      provide: AuthServiceConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SignInInterceptor,
      multi: true
    }

  ],
  bootstrap: [Industriradhus]
})
export class AppModule { }