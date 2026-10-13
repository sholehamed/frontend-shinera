import { Routes } from '@angular/router';
import { PanelLayoutComponent } from '../../shared/layouts/dashboard-layout/panel-layout.component';
import { SignInComponent } from '../../shared/pages/auth/sign-in/sign-in.component';

export default [
  { path: '', component: PanelLayoutComponent, children: [

     {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./system-dashboard/system-dashboard.component')
            .then(x => x.SystemDashboardComponent)
      }
  ] },
  {
    path: 'auth',
    children: [{ path: 'login', component: SignInComponent, data: { login_context: 'system' } }],
  },
] as Routes;
