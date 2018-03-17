import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MenuSetupComponent } from './components/menu-setup/menu-setup.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'menuSetup', component: MenuSetupComponent},
  ]},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
