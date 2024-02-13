import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PromiseDialogComponent } from '../promise-dialog/promise-dialog.component';
import { TeddyDialogComponent } from '../teddy-dialog/teddy-dialog.component';
import { ValentineComponent } from '../valentine/valentine.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dateselection',
  templateUrl: './dateselection.component.html',
  styleUrls: ['./dateselection.component.scss']
})
export class DateselectionComponent implements OnInit {
  dialogRef: any;
  inputValue: string = '';
  isButtonDisabled: boolean = true;
  
  constructor(private dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {
  }
  

  checkInput() {
    // Check if input matches certain criteria
    if (this.inputValue === "hello") {
      this.isButtonDisabled = false; // Enable the button
    } else {
      this.isButtonDisabled = true; // Disable the button
    }
  }

  submitData() {
    // Logic to submit data
    console.log('Data submitted:', this.inputValue);
    this.route.navigateByUrl('wishes')
  }
  openDialog(): void {
    // Check if the dialog is already open
    if (!this.dialogRef || !this.dialogRef.componentInstance) {
      this.dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
        hasBackdrop: true, // Set to true to reuse the existing dialog
        // other configuration options
      });

      this.dialogRef.afterClosed().subscribe(() => {
        // Reset the dialog reference after it's closed
        this.dialogRef = null;
      });
    }
  }

  promiseDialog(): void {
    // Check if the dialog is already open
    if (!this.dialogRef || !this.dialogRef.componentInstance) {
      this.dialogRef = this.dialog.open(PromiseDialogComponent, {
        width: '400px',
        hasBackdrop: true, // Set to true to reuse the existing dialog
        // other configuration options
      });

      this.dialogRef.afterClosed().subscribe(() => {
        // Reset the dialog reference after it's closed
        this.dialogRef = null;
      });
    }
  }

  teddyDialog(): void {
    // Check if the dialog is already open
    if (!this.dialogRef || !this.dialogRef.componentInstance) {
      this.dialogRef = this.dialog.open(TeddyDialogComponent, {
        width: '400px',
        hasBackdrop: true, // Set to true to reuse the existing dialog
        // other configuration options
      });

      this.dialogRef.afterClosed().subscribe(() => {
        // Reset the dialog reference after it's closed
        this.dialogRef = null;
      });
    }
  }

  valentineDialog(): void {
    // Check if the dialog is already open
    if (!this.dialogRef || !this.dialogRef.componentInstance) {
      this.dialogRef = this.dialog.open(ValentineComponent, {
        width: '400px',
        hasBackdrop: true, // Set to true to reuse the existing dialog
        // other configuration options
      });

      this.dialogRef.afterClosed().subscribe(() => {
        // Reset the dialog reference after it's closed
        this.dialogRef = null;
      });
    }
  }

  
}

