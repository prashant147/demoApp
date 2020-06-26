import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/service/user.service';
import { of, BehaviorSubject } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [{ provide: UserService, useClass: UserServiceStub }],
      imports:[
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class UserServiceStub {
  public eventStream = new BehaviorSubject('stream');
   public eventStream$ = this.eventStream.asObservable();
  users(input){
    return of([]);
  }
}