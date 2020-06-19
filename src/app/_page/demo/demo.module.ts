import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,FormsModule,
    SharedModule,
    RouterModule.forChild([{
      path:'',component:DemoComponent
    }])
  ],
  providers:[
    //DatePipe
  ]
})
export class DemoModule { }
