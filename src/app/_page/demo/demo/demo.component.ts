import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  var1:string= 'property';
  private var2:number= 0;
  public dt = new Date();
even= 0;
odd=1

  dummyArr:number[] = [
    1,2,3,4
  ]
  constructor(public _user:UserService) { }

  ngOnInit(): void {
    // alert(this.var2);
  }
  openalert(){
    this._user.showAlert('you have opened dialog box');
  }
}
