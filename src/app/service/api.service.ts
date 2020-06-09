import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  post(url,val){
    return this.http.post<any>(url, val).pipe( 
      map(res => {  
         return res;
      })
    );
  }

  get(url){
    return this.http.get<any>(url).pipe( 
      map(res => {  
         return res;
      })
    );
  }
}
