import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'password-manager';
 
 


  openLogin() {
    const dialogRef = this.dialog.open(LoginFormComponent);
    console.log('Dialogue opened');
  }
}
