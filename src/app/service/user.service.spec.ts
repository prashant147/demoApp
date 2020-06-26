import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { ApiService } from './api.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        MatDialogModule
      ],
      providers: [{ provide: ApiService, useClass: ApiServiceStub },
      
      ],
      
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class ApiServiceStub{

}