import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  private username!: string;
  private password!: string;

  constructor() {}

  ngOnInit(): void {}

  login(): void {
    console.log(this.username);
    console.log(this.password);
    console.log('Login Successfully');
  }

  handler(form: NgForm): void {
    if (form.value == null) {
      return;
    }

    console.log(form.value);

    this.username = form.value.username;
    this.password = form.value.password;

    this.login();
  }
}
