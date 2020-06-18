import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AddStudentComponent } from './add-student/add-student.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HomeComponent, AddStudentComponent,ListComponent],
  imports: [
    CommonModule,
    SharedModule, 
    
       HomeRoutingModule
  ]
})
export class HomeModule { }
