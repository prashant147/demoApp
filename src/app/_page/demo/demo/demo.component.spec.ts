import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { UserService } from 'src/app/service/user.service';
import { UserServiceStub } from '../../home/list/list.component.spec';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent ],
      imports:[FormsModule,
      ReactiveFormsModule],
      providers: [{ provide: UserService, useClass: UserServiceStub }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
