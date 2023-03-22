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
    isEndTimeInvalid:boolean = false;


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
            console.log(this.item.startTime!); 
            this.startTimeString = new Date(this.item.startTime!).getUTCHours() + ":" + new Date(this.item.startTime!).getUTCMinutes();
            this.endTimeString = new Date(this.item.endTime!).getUTCHours() + ":" + new Date(this.item.endTime!).getUTCMinutes();
            console.log(this.endTimeString);
        } 
      
    }

    save(form: NgForm) {
        console.log(this.isEndTimeInvalid);
        this.item.startTime = new Date();
        this.item.endTime = new Date();
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
    
    checkEndTime(){
        this.item.startTime = new Date();
        this.item.endTime = new Date();
        console.log(this.endTimeString);
        const [startHours, startMinutes] = this.startTimeString.split(':');
        this.item.startTime.setUTCHours(parseInt(startHours, 10));
        this.item.startTime.setUTCMinutes(parseInt(startMinutes, 10));
        const [endHours, endMinutes] = this.endTimeString.split(':');
        this.item.endTime.setUTCHours(parseInt(endHours, 10));
        this.item.endTime.setUTCMinutes(parseInt(endMinutes, 10));


        if (this.item.endTime < this.item.startTime)  {
            this.isEndTimeInvalid = true;
          } else {
            this.isEndTimeInvalid = false;
          }
    }

}