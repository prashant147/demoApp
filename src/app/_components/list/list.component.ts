import { Component, OnInit,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import { UserService,User} from '../../service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input("userData") userData: User;
  @Output() onEventReq: EventEmitter<any> = new EventEmitter<any>();
  constructor() { 

  }

  ngOnInit(): void {

  }

}
