import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index.component';
import { ActivityListComponent } from './components/activity/list.component';
import { DetailsComponent } from './components/activity/details.component';
import { LoginComponent } from './components/user/login.component';
import { SignupComponent } from './components/user/signup.component';
import { AddEditComponent } from './components/activity/add_edit.component';
import { ManagementComponent } from './components/activity/management.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "", component: IndexComponent },
    { path: "activity/list", component: ActivityListComponent },
    { path: "activity/management", component: ManagementComponent },
    { path: "activity/:mode", component: AddEditComponent },
    { path: "activity/:mode/:id", component: AddEditComponent },
    { path: "activity/details/:id", component: DetailsComponent },
    { path: "user/login", component: LoginComponent},
    { path: "user/signup", component: SignupComponent},
    { path: "**", redirectTo: "" },
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
