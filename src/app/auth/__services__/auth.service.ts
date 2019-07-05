import { UserObject } from './../../models/UserSignIn';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AlertService } from '../../shared/alert.service';
import { IUser } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = `${environment.ralphWaldoLibraryBackend}/api/v1/login`;
  currentUser: IUser;
  redirectUrl: string;
  isAuthenticated = false;

  get getCurrentUser(): IUser {
    if (this.currentUser) {
      return { ...this.currentUser };
    }
    return null;
  }
  set setCurrentUser(user: IUser) {
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
  }

  authorizeUser(response: UserObject) {
    const { success, token } = response;
    if (success && token) {
      localStorage.setItem('RWLToken', token);
      this.isAuthenticated = true;
      this.toastr.success('Login Successful', 'dismiss');
      return this.router.navigate(['/admin']);
    }
    return this.router.navigate(['/']);
  }

  unAuthorizeUser() {
    this.isAuthenticated = false;
    return this.isAuthenticated;
    // this.router.navigate(['/']);
  }

  // getAuthenticationStatus() {
  //   return this.isAuthenticated;
  // }
  handleEventError(err: any) {
    if (err instanceof HttpErrorResponse && err.status === 401 || err.status === 422 || err.status === 400) {
      this.toastr.error('Invalid Username or Password', 'dismiss');
      return this.unAuthorizeUser();
    }
    this.toastr.error('Something went wrong! try again', 'dismiss');
    this.router.navigate(['/']);
  }


}
