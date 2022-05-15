import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helper/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome',
    // canActivate: [AuthGuard]
  },
  { path: 'welcome', loadChildren: () => import('./modules/pages/welcome/welcome.module').then(m => m.WelcomeModule), },
  { path: 'home', loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
