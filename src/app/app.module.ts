import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexModule } from './components/index.module';
import { IndexComponent } from './components/index.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    RouterModule.forRoot([
      {path: "",component: IndexComponent},
      {path: "**", redirectTo: ""}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
