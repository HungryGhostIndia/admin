import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MenuSetupComponent } from './components/menu-setup/menu-setup.component';
import { RestSetupComponent } from './components/rest-setup/rest-setup.component';

import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/account.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    {path: 'menuSetup', component: MenuSetupComponent, canActivate: [AuthGuard]},
    {path: 'restSetup', component: RestSetupComponent, canActivate: [AuthGuard]},
  ]},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
