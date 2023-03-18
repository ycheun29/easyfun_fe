import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ActivityRepository } from "./activity.repository";
import { CommentRepository } from "./comment.repository";
import { RestDataSource } from "./rest.datasource";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ActivityRepository,
        CommentRepository,
        RestDataSource
    ]
})

export class ModelModule { }