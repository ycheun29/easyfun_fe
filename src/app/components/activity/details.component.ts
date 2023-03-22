import { Component } from "@angular/core";
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../../models/user.model";
import { Activity, Status } from "../../models/activity.model";
import { Comment } from "../../models/comment.model";
import { Participant } from "../../models/participant.model";
import { ActivityRepository } from "../../models/activity.repository";
import { CommentRepository } from "../../models/comment.repository";
import { ParticipantRepository } from "../../models/participant.repository";
import { AuthService } from "src/app/models/auth.service";
import { AuthGuard } from "../user/auth.gard";

@Component({
    selector: "activity-details",
    templateUrl: "details.component.html"
})

export class DetailsComponent {
    
    title:string = 'Activity Details';
    user: User = new User();
    item: Activity = new Activity();
    comment: Comment = new Comment();
    participant: Participant = new Participant();

    constructor(private activityRepository: ActivityRepository,
                private commentRepository: CommentRepository,
                private participantRepository: ParticipantRepository,
                private router: Router,
                private authService: AuthService,
                private authGuard: AuthGuard,
                activeRoute: ActivatedRoute) 
    { 
        this.item = this.activityRepository.getActivity(activeRoute.snapshot.params["id"]);
        commentRepository.setCommentList(this.item);
    }

    formatDate(date: Date | undefined): string {
        if (!date) {
          return '';
        }
        return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }

    formatTime(date: Date | undefined): string {
        if (!date) {
          return '';
        }
        const torontoTime = new Date(date).getTime() + (4 * 60 * 60 * 1000);
        return new Date(torontoTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    }

    get commentList(): Comment[] {
        return this.commentRepository.getCommentList(this.item);        
    }

    registerParticipant() {
        if (this.authService.authenticated) {
            if (confirm("Are you sure to register the event?")) {
                this.participant.activity = this.item!;
                this.participantRepository.addParticipant(this.participant);
            }
        } else {
            this.authGuard.canActivate(new ActivatedRouteSnapshot(), this.router.routerState.snapshot);
        }
    }
    

}