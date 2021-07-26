import {Component, Input, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent implements OnInit {

  @Input() infoChild: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<MatDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
