import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "", component: IndexComponent },
    { path: "**", redirectTo: "" }
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
