import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ActivityRepository } from "./activity.repository";
import { RestDataSource } from "./rest.datasource";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ActivityRepository,
        RestDataSource
    ]
})

export class ModelModule { }