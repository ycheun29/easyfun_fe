import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexModule } from './components/index.module';
import { ActivityModule } from "./components/activity/activity.module";
import { UserModule } from './components/user/user.module';
import { AdminModule } from "./components/admin/admin.module";
import { AuthGuard } from './components/user/auth.guard';
import { AdminGuard } from './components/user/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    IndexModule,
    ActivityModule,
    AppRoutingModule,
    UserModule,
    AdminModule
  ],
  providers: [AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
