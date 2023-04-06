import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../models/user.model";
import { RestDataSource } from "../../models/rest.datasource";
import { AuthService } from "src/app/models/auth.service";

@Component({
    selector: "dashboard",
    templateUrl: "dashboard.component.html"
})

export class DashboardComponent {
    
    title:string = 'Dashboard';
    users: number = 0;
    activities: number = 0;
    comments: number = 0;
    participants: number = 0;

    constructor(
        public dataSource: RestDataSource,
        private activeRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getUserNumber();
        this.getActivityNumber();
        this.getCommentNumber();
        this.getParticipantNumber();
    }

    getUserNumber(): void {
        this.dataSource.getUsers().subscribe({
            next: (data) => {
                this.users = data.length;
            },
            error: (e) => console.error(e)}
        );
    }

    getActivityNumber(): void {
        this.dataSource.getActivities().subscribe({
            next: (data) => {
                this.activities = data.length;
            },
            error: (e) => console.error(e)}
        );
    }

    getCommentNumber(): void {
        this.dataSource.getComments().subscribe({
            next: (data) => {
                this.comments = data.length;
            },
            error: (e) => console.error(e)}
        );
    }

    getParticipantNumber(): void {
        this.dataSource.getParticipants().subscribe({
            next: (data) => {
                this.participants = data.length;
            },
            error: (e) => console.error(e)}
        );
    }

}