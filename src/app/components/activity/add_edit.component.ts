import { formatDate } from "@angular/common";
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
    startTimeString!: string;
    endTimeString!: string;

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
        this.item.startTime = new Date();
        this.item.endTime = new Date();
        console.log(this.startTimeString);
        console.log(this.endTimeString);
        const [startHours, startMinutes] = this.startTimeString.split(':');
        this.item.startTime.setUTCHours(parseInt(startHours, 10));
        this.item.startTime.setUTCMinutes(parseInt(startMinutes, 10));
        const [endHours, endMinutes] = this.endTimeString.split(':');
        this.item.endTime.setUTCHours(parseInt(endHours, 10));
        this.item.endTime.setUTCMinutes(parseInt(endMinutes, 10));
        console.log(this.item.startTime);
        console.log(this.item.endTime);
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
    
    get getStartTimeString(){
        return this.item.startTime?.getUTCHours;
    }    
    get getEndTimeString(){
    return this.item.endTime?.getUTCHours;
    }    

}