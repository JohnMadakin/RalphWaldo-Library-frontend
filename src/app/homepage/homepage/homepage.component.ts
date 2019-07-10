import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { DialogService } from 'src/app/services/dialog.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(private selectDialog: DialogService) { }

  openDialog(action: string): void {
    let dialogRef: any;
    if (action === 'signup') {
      const loginHeight = '600px';
      dialogRef = this.selectDialog.selectDialogComponent(SignupComponent, loginHeight);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
      return;
    }
    return;
  }


}
