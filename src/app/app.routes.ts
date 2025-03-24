import { Routes } from '@angular/router';
import { ApplicationActionsComponent } from './components/application-actions/application-actions.component';
import { SearchApplicationComponent } from './components/search-application/search-application.component';
import { UpdateApplicationComponent } from './components/update-application/update-application.component';
import { InsertApplicationComponent } from './components/insert-application/insert-application.component';
import { CheckForUpdateComponent } from './components/check-for-update/check-for-update.component';

export const routes: Routes = [
  { path: '', component: ApplicationActionsComponent }, // Homepage with action buttons
  { path: 'search', component: SearchApplicationComponent }, // Search Application
  { path: 'update/:id', component: UpdateApplicationComponent }, // Update Application
  { path: 'insert', component: InsertApplicationComponent }, // Insert New Application
  { path: 'update', component: CheckForUpdateComponent },
];