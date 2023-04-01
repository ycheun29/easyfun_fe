import { Component, Input  } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";
import { User } from "src/app/models/user.model";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    @Input() title?: string;
    user: User = new User();

    constructor(private router: Router, public auth: AuthService){
        this.auth.getUser()
        .subscribe(response => {
            this.user = response;
        });}

    logout(){
        if (confirm('Are you sure?')){
            this.auth.clear();
            this.router.navigateByUrl("/");
        }
    }
}