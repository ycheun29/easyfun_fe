import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RestDataSource } from "src/app/models/rest.datasource";
import { User } from "src/app/models/user.model";
import { Activity, Status } from "../../models/activity.model";
import { ActivityRepository } from "../../models/activity.repository";

@Component({
    selector: "management",
    templateUrl: "management.component.html"
})

export class ManagementComponent {
    
    title:string = 'Activity Management';
    user: User = new User();

    constructor(private repository: ActivityRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
                {
                    repository.setActivityManagementList();
                }

                get activityManagementList(): Activity[] {
                    return this.repository.getActivityManagementList();
                   }
            
                deleteMethod(id: string | undefined) {
                    if(confirm("Are you sure to disable this activity?")) {
                        this.router.navigateByUrl("activity/delete/"+id);
                    }
                }
}