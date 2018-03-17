import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

// importing custome services
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TypeaheadModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap';


// importing components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { MenuSetupComponent } from './components/menu-setup/menu-setup.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    LeftbarComponent,
    MenuSetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    RatingModule.forRoot(),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
