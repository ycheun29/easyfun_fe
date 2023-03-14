import { Component } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
    selector: "signup",
    templateUrl: "signup.component.html"
})

export class SignupComponent {
    public title: string = "Sign Up";
    public user: User = new User();
    public confirmPassword!: string;
    public message!: string;

}