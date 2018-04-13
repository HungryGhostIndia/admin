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
import { RestSetupComponent } from './components/rest-setup/rest-setup.component';
import { ResDetailsComponent } from './components/rest-setup/res-details/res-details.component';
import { SecDetailsComponent } from './components/rest-setup/sec-details/sec-details.component';
import { UserCredComponent } from './components/rest-setup/user-cred/user-cred.component';

import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor, AuthGuard, AccountService } from './services/account.service';
import { ConstService } from './services/const.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    LeftbarComponent,
    MenuSetupComponent,
    RestSetupComponent,
    ResDetailsComponent,
    SecDetailsComponent,
    UserCredComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    RatingModule.forRoot(),
  ],
  providers: [ConstService, AuthGuard, AccountService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
