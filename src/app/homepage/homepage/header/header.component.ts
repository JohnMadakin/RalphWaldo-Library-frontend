import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { SignupComponent } from '../../signup/signup.component';
import { DialogService } from 'src/app/services/dialog.service';
import { AuthService } from 'src/app/auth/__services__/auth.service';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../homepage.component.scss']
})
export class HeaderComponent implements OnInit {
  private user: IUser;
  constructor(private selectDialog: DialogService, private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    console.log('check user ----> ', this.user);
  }
  openDialog(action: string): void {
    let dialogRef: any;
    if (action === 'login') {
      const loginHeight = '380px';
      dialogRef = this.selectDialog.selectDialogComponent(LoginComponent, loginHeight);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
      return;
    }
    const signupHeight = '600px';
    dialogRef = this.selectDialog.selectDialogComponent(SignupComponent, signupHeight);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout() {
    console.log('logout was clicked');
    this.authService.logout();
  }

}
