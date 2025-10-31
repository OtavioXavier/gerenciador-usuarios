import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard-component/dashboard-component';
import { UsersComponent } from './features/users-component/users-component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
];
