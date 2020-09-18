import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import * as firebase from 'firebase';

import { KungsvagenApartments } from '../app/app';
import { ProjectPage } from '../pages/project/project';
import { UnitPage } from '../pages/unit/unit';
import { AboutPage } from '../pages/about/about';
import { SignInPage } from './../pages/sign-in/sign-in';
import { SettingsComponent } from './../pages/settings/settings.component';
import { ImageBankComponent } from './../pages/settings/image-bank/image-bank.component';

import { HeaderComponent } from './../components/header/header';
import { ImageModalComponent } from './../components/image-modal/image-modal';
import { ModalPageComponent } from './../components/modal-page/modal-page.component';

import { TruncatePipe } from '../pipe/truncatepipe';

import { AuthenticationProvider } from './../providers/auth.provider';
import { SalesAgentProvider } from './../providers/salesagent.provider';
import { ProjectProvider } from 'src/providers/project.provider';
import { UnitProvider } from './../providers/unit.provider';
import { SiteSettingsProvider } from './../providers/site-settings.provider';
import { AccessGuardProvider } from './../providers/auth-guard.provider';
import { ModalPageProvider } from './../providers/modal-page.provider';

firebase.initializeApp(environment.firebase);

export function siteSettingsProviderFactory(provider: SiteSettingsProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    KungsvagenApartments,
    AboutPage,
    ProjectPage,
    UnitPage,
    SignInPage,
    HeaderComponent,
    ImageModalComponent,
    ModalPageComponent,
    TruncatePipe,
    SettingsComponent,
    ImageBankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: 'sign-in', component: SignInPage },
      { path: 'home', component: ProjectPage, canActivate: [AccessGuardProvider] },
      { path: 'kontakt', component: AboutPage, canActivate: [AccessGuardProvider] },
      { path: 'enhet/:id', component: UnitPage, canActivate: [AccessGuardProvider] },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [
    ProjectProvider, 
    UnitProvider,
    SalesAgentProvider,
    AuthenticationProvider,
    SiteSettingsProvider,
    AccessGuardProvider,,
    ModalPageProvider,
    { provide: APP_INITIALIZER, useFactory: siteSettingsProviderFactory, deps: [SiteSettingsProvider], multi: true }
  ],
  bootstrap: [KungsvagenApartments]
})
export class AppModule { }