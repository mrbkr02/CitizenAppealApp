import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActorDashboardComponent } from './components/actor-dashboard/actor-dashboard.component';
import { UserComponent } from './components/user/user.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { TrackApplicationComponent } from './components/track-application/track-application.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { SearchApplicationComponent } from './components/search-application/search-application.component';
import { ReapplyApplicationComponent } from './components/reapply-application/reapply-application.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'actor-dashboard', component: ActorDashboardComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'user', component: UserComponent },
      { path: 'complete-profile', component: CompleteProfileComponent },
      { path: 'track-application', component: TrackApplicationComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
    ] 
  },
  { path: 'otp-verification', component: OtpVerificationComponent },
  { path: 'search-application', component: SearchApplicationComponent },
  { path: 'reapply/:id', component: ReapplyApplicationComponent }
  
];
