import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'material-demo';
  constructor(public snackBar: MatSnackBar) {}
  openSnackBar(message, action) {
    let snackBarRef = this.snackBar.open(message, action, { duration: 3000 });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered');
    });
  }
  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {
      duration: 2000,
    });
  }
}

@Component({
  selector: 'custom-snackbar',
  template: `<span style="color:orange">Custom Snackbar</span>`,
})
export class CustomSnackBarComponent {}
