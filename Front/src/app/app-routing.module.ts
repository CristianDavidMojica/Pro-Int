import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/home/home.component'
import { JuryComponent } from '../app/jury/jury.component'
import { LoginComponent } from '../app/login/login.component'
import { UserComponent } from '../app/user/user.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'jury',
    component: JuryComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
