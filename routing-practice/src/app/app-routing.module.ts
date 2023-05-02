import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordComponent } from './auth/login/password/password.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    children: [
      {
        path: "register/:id/:name/:age",
        component: RegisterComponent,
      },
      {
        path: "password",
        component: PasswordComponent
      }
    ]
  },
  
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "**",
    redirectTo: 'login',   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
