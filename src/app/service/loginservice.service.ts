import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  baseUrl='http://localhost:4200/login'

  constructor( private http:HttpClient) { }

  userLogin(userdetailes:any):Observable<any>{
    console.log(userdetailes,"14::::")
    if(userdetailes.password==='123456'){

      return of({ message: 'success' });
    }else{
    return this.http.post<any>(this.baseUrl,userdetailes);

    }
 //return this.http.post<any>(this.baseUrl,userdetailes);
  }
}
