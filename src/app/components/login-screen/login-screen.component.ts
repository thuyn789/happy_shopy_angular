import { FirebaseAuthService } from './../../services/auth/firebase-auth.service';
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
  private userObj?: any;
  isUserLoggedIn = false;

  constructor(private fireAuth: FirebaseAuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('fireUser') !== null) {
      window.location.href = '/home';
    }
  }

  async login() {
    await this.fireAuth.userLogin(this.username, this.password);

    if (localStorage.getItem('fireUser') !== null) {
      this.userObj = JSON.parse(localStorage.getItem('fireUser')!);
      console.log(this.userObj);
      console.log(this.userObj.uid);
      console.log(this.userObj.email);

      this.isUserLoggedIn = this.fireAuth.isUserLoggedIn;
      console.log(this.isUserLoggedIn);

      //this.fireAuth.logout();
    } else {
      this.isUserLoggedIn = false;
    }
    window.location.reload();
  }

  async handler(form: NgForm) {
    if (form.value == null) return;

    this.username = form.value.username;
    this.password = form.value.password;

    await this.login();
  }
}
