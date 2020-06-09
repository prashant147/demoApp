import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload/image-upload.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ImageUploadComponent],
  exports: [ ImageUploadComponent,MatFormFieldModule,MatGridListModule,
    MatInputModule,MatIconModule,MatButtonModule,
    FormsModule,ReactiveFormsModule],
  imports: [
    MatFormFieldModule,MatButtonModule,MatGridListModule,
    MatInputModule,
    MatIconModule,
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  
})
export class SharedModule { }
