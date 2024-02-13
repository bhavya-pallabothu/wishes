import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-valentine',
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.scss']
})
export class ValentineComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ValentineComponent>) {  }

  ngOnInit(): void {
  }
  onClick(){
    this.dialogRef.close()
  }
}