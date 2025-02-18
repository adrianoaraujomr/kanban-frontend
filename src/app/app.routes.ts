import { Routes } from '@angular/router';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthorizeGuard } from './shared/guards/authorize-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent,
    canActivate: [AuthorizeGuard],
  },
];
