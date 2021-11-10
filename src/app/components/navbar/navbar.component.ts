import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../../services/auth/firebase-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userObj?: any;

  constructor(private fireAuth: FirebaseAuthService) {}

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('fireUser')!);
    console.log(this.userObj);
  }

  logout() {
    this.fireAuth.logout();
    window.location.reload();
  }
}
