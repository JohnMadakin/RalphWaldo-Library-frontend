import { Component } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignupSigninTabComponent } from '../signup-signin-tab/signup-signin-tab.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(action: string): void {
    console.log('yay!!! ', action);
    let dialogRef: any;
    if (action === 'login') {
      const loginHeight = '350px';
      dialogRef = this.selectComponent(LoginComponent, loginHeight);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
      return;
    }
    const signupHeight = '600px';
    dialogRef = this.selectComponent(SignupComponent, signupHeight);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  selectComponent(component, height: string) {
    return this.dialog.open(component, {
      panelClass: 'homepage-modalClass',
      width: '550px',
      height,
      data: { action: '' },
    });
  }

}
