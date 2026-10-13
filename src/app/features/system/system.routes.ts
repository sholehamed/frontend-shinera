import { Routes } from '@angular/router';
import { PanelLayoutComponent } from '../../shared/layouts/dashboard-layout/panel-layout.component';
import { SignInComponent } from '../../shared/pages/auth/sign-in/sign-in.component';

export default [
  { path: '', component: PanelLayoutComponent, children: [] },
  {
    path: 'auth',
    children: [{ path: 'login', component: SignInComponent, data: { login_context: 'system' } }],
  },
] as Routes;
