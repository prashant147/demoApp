import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  //styles: ['.login_inner {margin: 35px auto 0;background-color: #ffffff; padding: 30px 80px;max-width: 810px; width: 100%; overflow: hidden;}']
}) 
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(public fb: FormBuilder,private route: ActivatedRoute,public router: Router,public _service:UserService) { 
    this.form = fb.group({
      'email': ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      'password': ['cityslicka', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }
  onSubmit(value){
   
    
    this._service.login(value).subscribe((data)=>{
      if(data.success){
        this.router.navigate(['/home']);
      }else{
        alert(data.message);
      }
      
    });
    
  }
}
