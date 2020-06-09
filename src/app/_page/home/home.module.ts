import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CommanModule } from './../../_components/comman.module';
import { SharedModule } from './../../shared/shared.module';
import { FilterPipe } from '../../filter.pipe';
@NgModule({
  declarations: [HomeComponent, AddStudentComponent,FilterPipe],
  imports: [
    CommonModule,CommanModule,SharedModule, 
    HomeRoutingModule
  ]
})
export class HomeModule { }
