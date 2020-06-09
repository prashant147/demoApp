import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommanModule } from './_components/comman.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,CommanModule,
    AppRoutingModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})  
export class AppModule { }
