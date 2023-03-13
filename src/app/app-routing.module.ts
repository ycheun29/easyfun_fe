import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index.component';
import { ActivityListComponent } from './components/activity/list.component';
import { LoginComponent } from './components/user/login.component';
import { SignupComponent } from './components/user/signup.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "", component: IndexComponent },
    { path: "activity/list", component: ActivityListComponent },
    { path: "user/login", component: LoginComponent},
    { path: "user/signup", component: SignupComponent},
    { path: "**", redirectTo: "" },
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
