import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Activity, Status } from "../../models/activity.model";
import { ActivityRepository } from "../../models/activity.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {
    
    editing: boolean = false;
    title:string = 'Create an Activity';
    item: Activity = new Activity();
    public message?: string;

    constructor(private repository: ActivityRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        // Delete
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        // Edit
        if (this.editing) {
            this.title = 'Edit An Activity';
            this.item = this.repository.getActivity(activeRoute.snapshot.params["id"]);
            
        } 
      
    }

    save(form: NgForm) {
        if (form.valid) {
            this.repository.saveActivity(this.item);
            this.router.navigateByUrl("activity/management"); 
        } else {
            this.message = "All the fields are required";
        }               
    }

    private deleteItem(id: string){
        this.repository.deleteActivity(id);
        this.router.navigateByUrl("activity/management");
    }
    
}