import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ActivityRepository } from "./activity.repository";
import { CommentRepository } from "./comment.repository";
import { ParticipantRepository } from "./participant.repository";
import { RestDataSource } from "./rest.datasource";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ActivityRepository,
        CommentRepository,
        ParticipantRepository,
        RestDataSource
    ]
})

export class ModelModule { }