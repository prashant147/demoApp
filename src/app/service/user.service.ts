import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }
  login(val): Observable<any> {
    return this.api.post(environment.urls.auth.login(), val).pipe( 
      map(res => {  
          if (res.token) {
            localStorage.setItem("token",res.token);
              return { success: true, message: res.token };
          } else {
              return { success: false, message: "User not found" };
          }
      })
    );
  }
  users(pageNo): Observable<any> {
    return this.api.get(environment.urls.users.list()+"?page="+pageNo).pipe( 
      map(res => {  
          if (res.data) {
              return { success: true, data: res.data, total: res.total};
          } else {
              return null;
          }
      })
    );
  }
  add(val): Observable<any> {
    return this.api.post(environment.urls.users.list(), val).pipe( 
      map(res => {  
          if (res) {
              return { success: true, message: res };
          } else {
              return { success: false, message: "Try agin" };
          }
      })
    );
  }

  deleteUser(id){
    return this.api.delete(environment.urls.users.list()+ '/' +id).pipe( 
      map(res => {  
          if (res) {
              return { success: true, message: res };
          } else {
              return { success: false, message: "Try agin" };
          }
      })
    );
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
        avatar: this.avatar
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
