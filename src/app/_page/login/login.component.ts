import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(public fb: FormBuilder,private route: ActivatedRoute,public router: Router,public _service:UserService) { 
    this.form = fb.group({
      'email': ['eve.holt@reqres.in', Validators.compose([Validators.required, Validators.email])],
      'password': ['cityslicka', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }
  onSubmit(value){
    var obj = this;
    
    obj._service.login(value).subscribe(function(data){
      if(data.success){
        obj.router.navigate(['./home']);
      }else{
        alert(data.message);
      }
      
    });
    
  }
}
