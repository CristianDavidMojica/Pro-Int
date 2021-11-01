import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/home/home.component'
import { JuryComponent } from '../app/jury/jury.component'
import { LoginComponent } from '../app/login/login.component'
import { UserComponent } from '../app/user/user.component'
import { RegisterComponent } from '../app/register/register.component'
import {RegisterGroupComponent } from '../app/register-group/register-group.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'jury',
    component: JuryComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register-group',
    component: RegisterGroupComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
