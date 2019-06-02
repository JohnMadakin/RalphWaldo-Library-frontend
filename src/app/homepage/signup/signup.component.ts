import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

import { AuthenticationErrorStateMatcher } from 'src/app/services/errorState.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  matcher = new AuthenticationErrorStateMatcher();
  constructor() { }
  textFormControl = new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  ngOnInit() {
  }

}
