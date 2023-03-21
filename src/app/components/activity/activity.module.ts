import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../../models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { ActivityListComponent } from "./list.component";
import { DetailsComponent } from "./details.component";
import { AddEditComponent } from "./add_edit.component";
import { ManagementComponent } from "./management.component";
import { ParticipantsComponent } from "./participants.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [ActivityListComponent, AddEditComponent, ParticipantsComponent,ManagementComponent, DetailsComponent],
    exports : [ActivityListComponent,AddEditComponent, ParticipantsComponent, ManagementComponent,DetailsComponent]
})

export class ActivityModule {}