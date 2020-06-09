import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  loadChildren: () => import('./_page/login/login.module').then( m => m.LoginModule)
},
{
  path: 'home',canActivate:[AuthGuard],
  loadChildren: () => import('./_page/home/home.module').then( m => m.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
