import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AlertService } from '../../shared/alert.service';
import { IUser } from 'src/app/models/user.model';
import { UserObject } from './../../models/UserSignIn';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = `${environment.ralphWaldoLibraryBackend}/api/v1/login`;
  currentUser: IUser;
  redirectUrl: string;
  isAuthenticated = false;
  helper = new JwtHelperService();
   getCurrentUser(): IUser {
    if (this.currentUser) {
      return this.currentUser;
    }
    return null;
  }
  setCurrentUser(user: IUser) {
    this.currentUser = user;
  }

  constructor(
    private toastr: AlertService,
    private http: HttpClient,
    private router: Router,
) {}

  login(userName: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { userName, password });
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('RWLToken');
    this.router.navigate(['/']);
  }

  authorizeUser(response: UserObject) {
    const { success, token } = response;
    if (success && token) {
      localStorage.setItem('RWLToken', token);
      const user = this.decodeToken(token);
      // console.log('new user => ', user);
      this.setCurrentUser(user);
      this.isAuthenticated = true;
      this.toastr.success('Login Successful', 'dismiss');
      return this.router.navigate(['/admin']);
    }
    return this.router.navigate(['/']);
  }

  decodeToken(token: string) {
    const decodedObject = this.helper.decodeToken(token);
    const { created_at, updated_at, exp, ...user } = decodedObject;
    return user;
  }


  unAuthorizeUser() {
    this.isAuthenticated = false;
    return this.isAuthenticated;
    // this.router.navigate(['/']);
  }

  getAuthenticationStatus() {
    try {
      if (!localStorage.getItem('RWLToken')) {
        return false;
      }
      if (this.helper.isTokenExpired(localStorage.getItem('RWLToken'))) {
        return false;
      }
      const user = this.decodeToken(localStorage.getItem('RWLToken'));
      this.setCurrentUser(user);
      return user;
    } catch (err) {
      return false;
    }

  }

  handleEventError(err: any) {
    if (err instanceof HttpErrorResponse && err.status === 401 || err.status === 422 || err.status === 400) {
      this.toastr.error('Invalid Username or Password', 'dismiss');
      return this.unAuthorizeUser();
    }
    this.toastr.error('Something went wrong! try again', 'dismiss');
    this.router.navigate(['/']);
  }


}
