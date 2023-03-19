import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Activity, Status } from "../../models/activity.model";
import { ActivityRepository } from "../../models/activity.repository";

@Component({
    selector: "management",
    templateUrl: "management.component.html"
})

export class ManagementComponent {
    
    title:string = 'Manage my activities';
    filteredActivities: Activity[] = [];

    constructor(private repository: ActivityRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
                {
                    repository.setActivityList();
                }

                get activityList(): Activity[] {
                    return this.repository.getActivityList();        
                }
            
                deleteMethod(id: string | undefined) {
                    if(confirm("Are you sure to disable the post?")) {
                        this.router.navigateByUrl("post/delete/"+id);
                    }
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
}