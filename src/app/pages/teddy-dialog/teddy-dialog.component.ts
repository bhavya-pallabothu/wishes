import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-teddy-dialog',
  templateUrl: './teddy-dialog.component.html',
  styleUrls: ['./teddy-dialog.component.scss']
})
export class TeddyDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TeddyDialogComponent>) {  }

  ngOnInit(): void {
  }
  onClick(){
    this.dialogRef.close()
  }
}