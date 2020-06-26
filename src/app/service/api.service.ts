import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //crud
  post(url,val){
    return this.http.post<any>(url, val).pipe( 
      map(res => {  
         return res;
      }),
      catchError(this.handleError)
    );
  }

  get(url){
    return this.http.get<any>(url).pipe( 
      map(res => {  
         return res;
      })
    );
  }

  put(url,data){
    return this.http.put<any>(url,data).pipe( 
      map(res => {  
         return res;
      })
    );
  }
  delete(url){
    return this.http.delete<any>(url).pipe( 
      map(res => {  
         return res;
      })
    );
  }
  handleError(e):any{
    console.log(e);
  }
}
