import { Component, OnInit } from '@angular/core';
import { UserService,User} from '../../service/user.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pageNo = 1;
  public userData:User[]=null;
  public userTotal:User=null;
  public searchVal:any = { "key":""} ;
  constructor(public router: Router,public _service:UserService) { }

  ngOnInit(): void {
    this.loadUserData();
  } 
  loadUserData(){  
    var obj = this;
    obj._service.users(this.pageNo).subscribe(function(res){
       if(res.success){
        obj.userData = res.data;
        obj.userTotal = res.total;
       }
       
    });
  }
  onClick_user(e){
    console.log(e);
  }
  onclick_Clear(){
    this.searchVal.key = "";
  }
 
}
