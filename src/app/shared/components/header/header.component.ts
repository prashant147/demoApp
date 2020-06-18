import { Component,EventEmitter, OnInit,Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  
  
  @Input() isSearch:boolean = false;

  @Input("search") _search ;
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}
