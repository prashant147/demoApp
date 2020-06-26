import { Injectable } from '@angular/core';
import { Observable, forkJoin, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiService } from '../service/api.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AlertComponent } from '../shared/components/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public eventStream = new BehaviorSubject('stream');
   public eventStream$ = this.eventStream.asObservable();

  constructor(private api: ApiService, public _dialog: MatDialog) {}

  // login api
  login(val): Observable<any> {
    return this.api.post(environment.urls.auth.login(), val).pipe(
      map((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          return { success: true, message: res.token };
        } else {
          return { success: false, message: 'User not found' };
        }
      })
    );
  }

  users(pageNo): Observable<any> {
    return this.api.get(environment.urls.users.list() + '?page=' + pageNo).pipe(
      map((res) => {
        if (res.data) {
          return { success: true, data: res.data, total: res.total };
        } else {
          return null;
        }
      })
    );
    // // page =1
   // return of({ success: true, data: userData, total: 12})
  }

  add(val): Observable<any> {
    return this.api.post(environment.urls.users.list(), val).pipe(
      map((res) => {
        if (res) {
          return { success: true, message: res };
        } else {
          return { success: false, message: 'Try agin' };
        }
      })
    );
  }

  deleteUser(id) {
    return this.api.delete(environment.urls.users.list() + '/' + id).pipe(
      map((res) => {
        if (res) {
          return { success: true, message: res };
        } else {
          return { success: false, message: 'Try agin' };
        }
      })
    );
  }

  showAlert(message: string) {
    this._dialog.open(AlertComponent, {
      data: { message: message },
    });
  }
}

export class User {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;

  constructor(ini: UserInput) {
    this.updateWith(ini);
  }

  updateWith(ini: UserInput) {
    if (ini.id) {
      this.id = ini.id;
    }
    if (ini.email) {
      this.email = ini.email;
    }
    if (ini.first_name) {
      this.first_name = ini.first_name;
    }
    if (ini.avatar) {
      this.avatar = ini.avatar;
    }
  }

  toIni(): UserInput {
    return {
      id: this.id,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      avatar: this.avatar,
    };
  }
}
interface UserInput {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

export const userData: UserInput[] = [
  {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    last_name: 'Wong',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
  },
  {
    id: 4,
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    last_name: 'Holt',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
  },
  {
    id: 5,
    email: 'charles.morris@reqres.in',
    first_name: 'Charles',
    last_name: 'Morris',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
  },
  {
    id: 6,
    email: 'tracey.ramos@reqres.in',
    first_name: 'Tracey',
    last_name: 'Ramos',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
  },
];
