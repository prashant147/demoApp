import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  var1:string= 'property';
  private var2:number= 0;
  constructor() { }

  ngOnInit(): void {
    // alert(this.var2);
  }

}
