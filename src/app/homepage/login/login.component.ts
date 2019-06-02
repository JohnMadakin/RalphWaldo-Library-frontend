import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { AuthenticationErrorStateMatcher } from 'src/app/services/errorState.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);


  matcher = new AuthenticationErrorStateMatcher();


}




