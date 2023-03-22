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
        if(confirm("Are you sure to register the event?")) {
            this.participant.activity = this.item!;
            this.participantRepository.addParticipant(this.participant);
        }
    }

}