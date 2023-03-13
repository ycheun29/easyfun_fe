import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index.component';
import { ActivityListComponent } from './components/activity/list.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "", component: IndexComponent },
    { path: "activity/list", component: ActivityListComponent },
    { path: "**", redirectTo: "" }
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
