import { Component,EventEmitter, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  
  
  @Input() isSearch:boolean = false;

  @Input("search") _search ;
  constructor() { }

  ngOnInit(): void {
  }

}
