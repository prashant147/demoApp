import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
//import {  } from 'protractor';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.scss']
})
export class DemoChildComponent implements OnInit {

  @Input('item') data: number;

  textData:string='dummy';

  @Output('emitText') emitText:EventEmitter<any> = new EventEmitter();

  @Output('emitText2') emitText2:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emit(input=1){
    /// if it first button
    if(input ==1){
      this.emitText.emit(this.textData)
    }else{
      /// if it second button
      this.emitText2.emit(this.textData)
    }
  }

 
}
