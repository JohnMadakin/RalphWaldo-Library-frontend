import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AuthenticationErrorStateMatcher } from 'src/app/services/errorState.service';
import { AuthService } from 'src/app/auth/__services__/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  matcher = new AuthenticationErrorStateMatcher();
  isLoading = false;
  noAuthError = true;
  errorResponse = false;
  constructor(private authService: AuthService, private dialog: MatDialog) { }
  userEmailOrUsername = new FormControl('', [
    Validators.required,
  ]);
  userPassword = new FormControl('', [
    Validators.required,
  ]);


  login(userName: string, password: string) {
    if (this.userEmailOrUsername.valid && this.userPassword.valid) {
      console.log('is valid => ');
      this.errorResponse = true;
      this.isLoading = true;

      this.authService.login(userName, password).subscribe((result) => {
        console.log('result => ', result);
        this.authService.authorizeUser(result);
        return this.dialog.closeAll();
      }, (error) => {
        if (error) {
          this.isLoading = false;
          this.errorResponse = false;
          this.noAuthError = this.authService.handleEventError(error);
          return;
        }
      });
    }
    return;
  }

}
