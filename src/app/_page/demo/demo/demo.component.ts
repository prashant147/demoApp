import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormControl, Validators } from '@angular/forms';
import { DemoChildComponent } from '../demo-child/demo-child.component';
import { DropdownSettingsModel } from 'ngx-mat-dropdown';
//import { DemoChildComponent } from '../demo-child/demo-child.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers: [],
})
export class DemoComponent implements OnInit, AfterViewInit {
  var1: string = 'property';
  private var2: number = 0;
  public dt = new Date();
  even = 0;
  odd = 1;

  ctrl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-z0-9 ]+$'),
  ]);

  dummyArr: number[] = [1, 2, 3, 4];

  // @ViewChild(DemoChildComponent) childComp:DemoChildComponent;
  @ViewChild(DemoChildComponent, { read: ElementRef })
  childComp: DemoChildComponent;

  @ViewChild('btnRef', { read: ElementRef }) btnRef: ElementRef;

  userList = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
    { id: 4, name: 'user4' },
    { id: 5, name: 'user5' },
    { id: 6, name: 'user6' },
  ];

  selected = null;
  multiSelected=[]
  setDropdownSettings(
    id:string,
    isMultiple:boolean,
    placeholder:string,
    label:string,
    key:string,
    tooltip:string
  ): DropdownSettingsModel {
    let ddl = new DropdownSettingsModel(
      id,
      isMultiple,
      placeholder,
      label,
      key,
      tooltip
    );
    return ddl;
  }
  constructor(public _user: UserService) {}

  ngOnInit(): void {
    // alert(this.var2);
    //[Validators.required,Validators.pattern('^[A-Za-z0-9 ]+$')]]
    this.selected= this.userList[0];
    this.multiSelected.push(this.userList[1])
  }

  ngAfterViewInit() {
    console.log(this.btnRef);
    console.log(this.childComp);
  }
  openalert() {
    this._user.showAlert('you have opened dialog box');
  }

  emitted(event, item, type) {
    alert(event + ' ' + item + ' ' + type);

    this.btnRef.nativeElement.setAttribute('style', 'color:' + 'red');
  }

  emitted2(event, item, type) {
    alert(event + ' ' + item + ' ' + type);
  }

  onFileuload(evt) {}
}
