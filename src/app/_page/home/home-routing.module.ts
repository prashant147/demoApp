import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { AuthGuard } from '../../service/auth.guard';

const routes: Routes = [
  {path:'',component:HomeIndexComponent,
  canActivateChild:[AuthGuard],
  children:[
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },{
      path: 'list',
      component:HomeComponent
    },{
      path: 'add',
      component:AddStudentComponent
    }
  ]
},
  
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
