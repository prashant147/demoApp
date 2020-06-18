import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild([{
      path:'',component:DemoComponent
    }])
  ]
})
export class DemoModule { }
