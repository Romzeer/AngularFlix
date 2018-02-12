/**
 * Angular Import
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Components Import
*/
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {InscriptionComponent} from "./inscription/inscription.component";


const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
  path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
  path: 'register',
    pathMatch: 'full',
    component: InscriptionComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
