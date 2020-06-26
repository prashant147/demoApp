import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ListComponent } from './list/list.component';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from 'src/app/service/user.service';
import { UserServiceStub } from './list/list.component.spec';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,
      HeaderComponent,FooterComponent,
    ListComponent ],
      imports:[
        RouterTestingModule,
        MatIconModule
      ],
      
      providers: [{ provide: UserService, useClass: UserServiceStub }],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
