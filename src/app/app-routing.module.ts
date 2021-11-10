import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorScreenComponent } from './components/error-screen/error-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: '**', component: ErrorScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
