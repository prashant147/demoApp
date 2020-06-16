import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent,FooterComponent,ListComponent],
  exports: [HeaderComponent,FooterComponent,ListComponent,
    MatFormFieldModule,MatGridListModule,
    MatInputModule,MatIconModule,MatButtonModule,
    FormsModule,ReactiveFormsModule],
  entryComponents:[HeaderComponent,FooterComponent,ListComponent],
  imports: [
    CommonModule,MatFormFieldModule,MatGridListModule,
    MatInputModule,MatIconModule,MatButtonModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class SharedModule { }
