import { Component, Input  } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";

@Component({
    selector: 'admin-header',
    templateUrl: './adminheader.component.html'
})

export class AdminHeaderComponent{
    @Input() title?: string;

    constructor(private router: Router, public auth: AuthService){}

    logout(){
        if (confirm('Are you sure?')){
            this.auth.clear();
            this.router.navigateByUrl("/");
        }
    }
}