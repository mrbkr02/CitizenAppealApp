import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent}
  // { path: '', component: ApplicationActionsComponent }, // Homepage with action buttons
  // { path: 'search', component: SearchApplicationComponent }, // Search Application
  // { path: 'update/:id', component: UpdateApplicationComponent }, // Update Application
  // { path: 'insert', component: InsertApplicationComponent }, // Insert New Application
  // { path: 'update', component: CheckForUpdateComponent },
];