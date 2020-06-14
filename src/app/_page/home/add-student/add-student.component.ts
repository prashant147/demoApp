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
   
  }
  get f() { return this.form.controls; }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
    });
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
