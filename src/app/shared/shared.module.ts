import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [HeaderComponent,FooterComponent, HighlightDirective,
    FilterPipe],
  exports: [HeaderComponent,FooterComponent,
    HighlightDirective,
    FilterPipe,
    MatFormFieldModule,MatGridListModule,
    MatInputModule,MatIconModule,MatButtonModule,
    FormsModule,ReactiveFormsModule],
  entryComponents:[],
  imports: [
    CommonModule,MatFormFieldModule,MatGridListModule,
    MatInputModule,MatIconModule,MatButtonModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class SharedModule { }
