import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard-component/dashboard-component';
import { UsersComponent } from './features/users-component/users-component';
import { UserScreen } from './features/user-screen/user-screen';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/edit/:id', component: UserScreen },
];
