import { Component } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/models/auth.service';
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
        private activeRoute: ActivatedRoute,
        private router: Router,
        private auth: AuthService)
        { 
            this.auth.getUser()
            .subscribe((response: User) => {
                this.user = response;
            });
        }


    updateProfile(form: NgForm) {
        if (form.valid) {
            this.dataSource.updateUser(this.user).subscribe((response) => {
                if (response.success) {
                        alert(`${response.message}`);
                }
                else{
                    alert(`Error: ${response.message}`);
                }     
            }
            );
            this.router.navigateByUrl("profile");
        } 
        else {
            this.message = "All the fields are required";
        }
    }

    }