import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormControl, Validators } from '@angular/forms';
import { DemoChildComponent } from '../demo-child/demo-child.component';
//import { DemoChildComponent } from '../demo-child/demo-child.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers:[
    
  ]
})
export class DemoComponent implements OnInit,AfterViewInit {

  var1:string= 'property';
  private var2:number= 0;
  public dt = new Date();
even= 0;
odd=1

ctrl:FormControl= new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9 ]+$')]);

  dummyArr:number[] = [
    1,2,3,4
  ]

 // @ViewChild(DemoChildComponent) childComp:DemoChildComponent;
  @ViewChild(DemoChildComponent,{read:ElementRef}) childComp:DemoChildComponent;

  @ViewChild('btnRef',{read:ElementRef}) btnRef:ElementRef;
  constructor(public _user:UserService) { }

  ngOnInit(): void {
    // alert(this.var2);
    //[Validators.required,Validators.pattern('^[A-Za-z0-9 ]+$')]]
  }

  ngAfterViewInit(){
    console.log(this.btnRef)
    console.log(this.childComp)
  }
  openalert(){
    this._user.showAlert('you have opened dialog box');
  }

  emitted(event,item,type){
    alert(event + " " + item + " " + type)

    this.btnRef.nativeElement.setAttribute("style", "color:" + "red");
  }

  emitted2(event,item,type){
    alert(event + " " + item + " " + type)
  }

  onFileuload(evt){
    
  }
}
