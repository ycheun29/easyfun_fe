import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/models/auth.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  public title: string = "Login";
  public username!: string;
  public password!: string;
  public message?: string;

  constructor(private router: Router,
    private auth: AuthService) { }

authenticate(form: NgForm) {
    if (form.valid) {
        // perform authentication
        this.auth.authenticate(this.username, this.password)
            .subscribe(response => {
                if (response.success) {
                    this.router.navigateByUrl(this.auth.redirectUrl || "");
                }
                this.message = response.message;
            });
    } else {
        this.message = "Form Data Invalid";
    }
}
}
