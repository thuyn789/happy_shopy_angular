import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  isUserLoggedIn = false;

  constructor(private fireAuth: AngularFireAuth) {}

  async userLogin(username: string, password: string) {
    try {
      await this.fireAuth
        .signInWithEmailAndPassword(username, password)
        .then((res) => {
          this.isUserLoggedIn = true;
          localStorage.setItem('fireUser', JSON.stringify(res.user));
        });
    } catch (e) {
      console.log(e);
    }
  }

  async signup(username: string, password: string) {
    try {
      await this.fireAuth
        .createUserWithEmailAndPassword(username, password)
        .then((res) => {
          this.isUserLoggedIn = true;
          localStorage.setItem('fireUser', JSON.stringify(res.user));
        });
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      await this.fireAuth.signOut();
      localStorage.removeItem('fireUser');
      this.isUserLoggedIn = false;
    } catch (e) {
      console.log(e);
    }
  }
}
