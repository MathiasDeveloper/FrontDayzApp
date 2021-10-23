import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(name: string, password: string): Observable<any> {
    return this.http.post(apiUrl + '/login', {
      name,
      password
    }).pipe(
      map(response => {
        if (response){
          localStorage.setItem('jwt', JSON.stringify(response));
        }
      })
    );
  }

}
