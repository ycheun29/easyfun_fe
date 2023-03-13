import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { IndexComponent } from "./index.component";
import { PartialsModule } from "./partials/partials.module";
import { RouterModule } from "@angular/router";
@NgModule({
    imports: [BrowserModule, FormsModule,PartialsModule, RouterModule],
    declarations: [
        IndexComponent
    ],
    exports: [IndexComponent]
})

export class IndexModule{}

