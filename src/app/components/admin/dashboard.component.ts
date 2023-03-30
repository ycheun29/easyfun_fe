import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../models/user.model";
import { Activity, Status } from "../../models/activity.model";
import { Comment } from "../../models/comment.model";
import { Participant } from "../../models/participant.model";
import { ActivityRepository } from "../../models/activity.repository";
import { CommentRepository } from "../../models/comment.repository";
import { ParticipantRepository } from "../../models/participant.repository";
import { AuthService } from "src/app/models/auth.service";

@Component({
    selector: "dashboard",
    templateUrl: "dashboard.component.html"
})

export class DashboardComponent {
    
    title:string = 'Dashboard';
    user: User = new User();
    users: number = 0;
    activities: number = 0;
    comments: number = 0;
    participants: number = 0;

    constructor(private activityRepository: ActivityRepository,
                private commentRepository: CommentRepository,
                private participantRepository: ParticipantRepository,
                private router: Router,
                activeRoute: ActivatedRoute,
                public auth: AuthService) 
    { 
        this.activities = this.activityRepository.getActivityList().length;
    }

}