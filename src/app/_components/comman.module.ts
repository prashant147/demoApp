import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [HeaderComponent,FooterComponent,ListComponent],
  exports: [HeaderComponent,FooterComponent,ListComponent],
  entryComponents:[HeaderComponent,FooterComponent,ListComponent],
  imports: [
    CommonModule,SharedModule
  ]
})
export class CommanModule { }
