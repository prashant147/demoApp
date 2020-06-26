import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DemoChildComponent } from './demo-child/demo-child.component';
import { DemoService } from 'src/app/shared/services/demo.service';



@NgModule({
  declarations: [DemoComponent, DemoChildComponent],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([{
      path:'',component:DemoComponent
    }])
  ],
  providers:[
    //DatePipe
    DemoService
  ]
})
export class DemoModule { }
