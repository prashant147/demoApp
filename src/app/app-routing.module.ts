import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
{
  path: 'login',
  loadChildren: () => import('./_page/login/login.module').then( m => m.LoginModule)
//  '_page/login/login.module#LoginModule'
},
{
  path: 'home',canActivate:[AuthGuard],
  loadChildren: () => import('./_page/home/home.module').then( m => m.HomeModule)
},
{
  path: 'demo',
  loadChildren: () => import('./_page/demo/demo.module').then( m => m.DemoModule)
},
{
  path: '',
  redirectTo: 'demo',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'login',
  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy:PreloadAllModules}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
