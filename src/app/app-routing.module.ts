import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MenuSetupComponent } from './components/menu-setup/menu-setup.component';
import { RestSetupComponent } from './components/rest-setup/rest-setup.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'menuSetup', component: MenuSetupComponent},
    {path: 'restSetup', component: RestSetupComponent},
  ]},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
