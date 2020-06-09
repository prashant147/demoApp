import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddStudentComponent } from './add-student/add-student.component';
const routes: Routes = [{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
},{
  path: 'list',
  component:HomeComponent
},{
  path: 'add',
  component:AddStudentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
