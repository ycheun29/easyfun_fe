import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class PartialsModule{}