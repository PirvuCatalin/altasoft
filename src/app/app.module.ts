import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './component/header/header.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { ExpertiseComponent } from './component/expertise/expertise.component';
import { FirstHomePageComponent } from './component/first-home-page/first-home-page.component';
import { OurTeamComponent } from './component/our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactComponent,
    ExpertiseComponent,
    FirstHomePageComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
