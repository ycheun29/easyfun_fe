import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Activity, Status } from "../../models/activity.model";
import { Comment } from "../../models/comment.model";
import { ActivityRepository } from "../../models/activity.repository";
import { CommentRepository } from "../../models/comment.repository";

@Component({
    selector: "activity-details",
    templateUrl: "details.component.html"
})

export class DetailsComponent {
    
    title:string = 'Activity Details';
    item: Activity = new Activity();
    comment: Comment = new Comment();

    constructor(private activityRepository: ActivityRepository,
                private commentRepository: CommentRepository,
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

}