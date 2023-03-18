import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../../models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { ActivityListComponent } from "./list.component";
import { DetailsComponent } from "./details.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [ActivityListComponent, DetailsComponent],
    exports : [ActivityListComponent, DetailsComponent]
})

export class ActivityModule {}