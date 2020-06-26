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
  
  private test ='test'
  constructor(public router: Router,public _service:UserService) {
    this._service.eventStream$.subscribe(
      (res)=>{
        console.log(res);
      }
    )
   }

  ngOnInit(): void {
    this.loadUserData();
  } 
  loadUserData(){  
    //var obj = ;
    this._service.users(this.pageNo).subscribe((res)=>{
       if(res.success){
        this.userData = res.data;
        this.userTotal = res.total;
       }
       
    });

    //jhf
  }
  onDeleteUser(event:User){
   this._service.deleteUser(event.id).subscribe(
     res=>{
       if(res.success){
         alert("successfully deleted");
       }else{
        alert("error occurred, please try again!");
       }
     }
   )
  }
  onclick_Clear(){
    this.searchVal.key = "";
  }
 
}
