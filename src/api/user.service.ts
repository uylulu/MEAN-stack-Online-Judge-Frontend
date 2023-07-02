import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { User } from 'src/models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.baseUrl + '/user'

  constructor(private http: HttpClient) { 
  }

  validateUser(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(user)
    return this.http.post(this.baseUrl + '/login', body, {'headers': headers});
  }

  addUser(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(user)
    console.log(body);

    return this.http.post(this.baseUrl + '/register', body, {'headers': headers})
  }
}