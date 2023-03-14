import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  public title: string = "Login";
  public username!: string;
  public password!: string;
  public message!: string;
}
