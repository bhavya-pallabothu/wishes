import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-promise-dialog',
  templateUrl: './promise-dialog.component.html',
  styleUrls: ['./promise-dialog.component.scss']
})
export class PromiseDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PromiseDialogComponent>) {  }

  ngOnInit(): void {
  }
  onClick(){
    this.dialogRef.close()
  }
}