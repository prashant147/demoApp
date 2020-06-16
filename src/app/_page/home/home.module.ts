import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SharedModule } from '../../_components/shared.module';

import { FilterPipe } from '../../filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent, AddStudentComponent,FilterPipe],
  imports: [
    CommonModule,SharedModule, 
       HomeRoutingModule
  ]
})
export class HomeModule { }
