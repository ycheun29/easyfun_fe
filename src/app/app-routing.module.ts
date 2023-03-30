import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index.component';
import { ActivityListComponent } from './components/activity/list.component';
import { DetailsComponent } from './components/activity/details.component';
import { LoginComponent } from './components/user/login.component';
import { SignupComponent } from './components/user/signup.component';
import { AddEditComponent } from './components/activity/add_edit.component';
import { ManagementComponent } from './components/activity/management.component';
import { AuthGuard } from './components/user/auth.guard';
import { AdminGuard } from './components/user/admin.guard';
import { DashboardComponent } from './components/admin/dashboard.component';
import { ParticipantsComponent } from './components/activity/participants.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "", component: IndexComponent },
    { path: "activity/list", component: ActivityListComponent },
    { path: "activity/participants/:id", component: ParticipantsComponent, canActivate: [AuthGuard] },
    { path: "activity/details/:id", component: DetailsComponent },
    { path: "activity/management", component: ManagementComponent , canActivate: [AuthGuard]},
    { path: "activity/:mode", component: AddEditComponent , canActivate: [AuthGuard]},
    { path: "activity/:mode/:id", component: AddEditComponent , canActivate: [AuthGuard]},
    { path: "user/login", component: LoginComponent},
    { path: "user/signup", component: SignupComponent},
    { path: "admin/dashboard", component: DashboardComponent , canActivate: [AdminGuard]},
    { path: "**", redirectTo: "" },
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
