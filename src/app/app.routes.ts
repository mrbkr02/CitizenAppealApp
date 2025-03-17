import { Routes } from '@angular/router';
import { ApplicationHomeComponent } from './components/application-home/application-home.component';
import { ApplicationInfoComponent } from './components/application-info/application-info.component';

export const routes: Routes = [
  { path: '', component: ApplicationHomeComponent },
  { path: 'application-info/:id', component: ApplicationInfoComponent }, // Route with parameter(with id)
];
