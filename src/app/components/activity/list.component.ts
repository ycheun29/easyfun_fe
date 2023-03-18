import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Activity } from "../../models/activity.model";
import { ActivityRepository } from "../../models/activity.repository";

@Component({
    selector: "list-activity",
    templateUrl: "list.component.html"
})

export class ActivityListComponent{

    title = 'Explore Activities';    

    constructor(private repository: ActivityRepository,
        private router: Router) 
    {
        repository.getActivityList();
    } 
    
    formatDate(date: Date | undefined): string {
        if (!date) {
          return '';
        }
        return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }

    get activityList(): Activity[] {
        return this.repository.getActivityList();        
    }

}
