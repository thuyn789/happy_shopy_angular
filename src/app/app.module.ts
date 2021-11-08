import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { FirebaseAuthService } from './services/auth/firebase-auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, LoginScreenComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
