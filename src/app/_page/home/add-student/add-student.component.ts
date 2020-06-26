import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService} from '../../../service/user.service';
import { map, startWith } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  public form: FormGroup;

  dummyVal={
    name:'rk',
    job:'dev',
    address:{
      street:'st'
    }
  }
  constructor(public fb: FormBuilder,private route: ActivatedRoute,public router: Router,public _service:UserService) { 
   
  }
  get f() { return this.form.controls; }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required,Validators.pattern('^[A-Za-z0-9 ]+$')]],
      address: new FormGroup({
        street: new FormControl('')
      })
    });

    console.log(this.form)
 this.form.setValue(this.dummyVal);
 this.form.controls.job.setValue("developer")
//  this.form.setValue({name:'rk',job:'dev',address:{street:''}});


this.route.queryParamMap.subscribe(
  params=>{
    console.log(params)
  }
)
  

  let filterValues = this.form.controls.name.valueChanges
     .pipe(
      startWith(''),
      map(value => this._filter(value))
     )
   
  }
  addcontrol(){
    this.form.addControl('new',new FormControl('',[Validators.required]))
    
  }
  _filter(value){
    console.log(value)
  }
  onSubmit(value){
      
    this._service.add(value).subscribe((data)=>{
      console.log(data);
      if(data.success){
        this._service.showAlert('added successfully');
        this.router.navigate(['./home']);
      }else{
        this._service.showAlert(data.message);
      }
      
    });
    
  }
}
