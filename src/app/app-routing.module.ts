import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"homePage",
    component:HomePageComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"logout",
    component:LogoutComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"",
    redirectTo:"/homePage",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
