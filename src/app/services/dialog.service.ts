import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public dialog: MatDialog) { }
  selectDialogComponent(component, height: string) {
    return this.dialog.open(component, {
      panelClass: 'homepage-modalClass',
      width: '550px',
      height,
      data: { action: '' },
    });
  }

}
