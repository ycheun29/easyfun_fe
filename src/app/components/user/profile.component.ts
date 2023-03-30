import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestDataSource } from 'src/app/models/rest.datasource';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
  })

  export class ProfileComponent {
    public title: string = "Profile";
    public user: User = new User();
    public message?: string;

  

    constructor(
        public dataSource: RestDataSource,
        private activeRoute: ActivatedRoute
    ) {}

    getProfile(): void {
        this.dataSource.getUserProfile().subscribe({
            next: (data) => {
                this.user = data;
            },
            error: (e) => console.error(e)}
        );
    }

    updateProfile(form: NgForm) {
        if (form.valid) {

               
        } else {
            this.message = "All the fields are required";
        }
    }

    }