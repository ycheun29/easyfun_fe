import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AdminHeaderComponent } from "./adminheader.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [
        AdminHeaderComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        AdminHeaderComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class PartialsModule{}