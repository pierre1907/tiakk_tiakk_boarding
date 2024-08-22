import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FirstLoginComponent } from './components/first-login/first-login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: 
  // }
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'first-time/',
        component: FirstLoginComponent,
      }
    ]
  },
  {
    path: 'forgot-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }