import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const UrlForSignIn = 'https://mdv-auth-json-server.herokuapp.com/auth/login'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient) { }
	
	public getToken(): string {
		return localStorage.getItem('token');
	}

	authenticate({email, password}): Observable<any> {
		return this.http.post(UrlForSignIn, {email, password});
	}

}

