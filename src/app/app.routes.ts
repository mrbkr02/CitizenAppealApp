import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { TrackApplicationComponent } from './components/track-application/track-application.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'user', component: UserComponent },
      { path: 'complete-profile', component: CompleteProfileComponent },
      { path: 'track-application', component: TrackApplicationComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
    ] 
  }
];
