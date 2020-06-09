import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService} from '../../../service/user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  public form: FormGroup;
  constructor(public fb: FormBuilder,private route: ActivatedRoute,public router: Router,public _service:UserService) { 
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'job': ['', Validators.compose([Validators.required])],
    });
  }
  get f() { return this.form.controls; }
  ngOnInit(): void {
  }
  onSubmit(value){
    var obj = this;
    
    obj._service.add(value).subscribe(function(data){
      console.log(data);
      if(data.success){
        obj.router.navigate(['./home']);
      }else{
        alert(data.message);
      }
      
    });
    
  }
}
