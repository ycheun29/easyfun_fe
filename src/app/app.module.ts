import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexModule } from './components/index.module';
import { ActivityModule } from "./components/activity/activity.module";
import { UserModule } from './components/user/user.module';
import { AuthGuard } from './components/user/auth.gard';

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
    UserModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
