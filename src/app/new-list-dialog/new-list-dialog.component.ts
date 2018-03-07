import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-list-dialog',
  templateUrl: './new-list-dialog.component.html',
  styleUrls: ['./new-list-dialog.component.css']
})
export class NewListDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onEnter(): void {
    this.dialogRef.close(this.data.list);
  }
}
