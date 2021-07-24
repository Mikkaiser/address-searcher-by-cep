import { FieldsService } from './fields.service';
import {Component, Output, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogComponent} from "../mat-dialog/mat-dialog.component";

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  constructor(private fieldsService: FieldsService, public dialog: MatDialog) {}

  @Output()
  info?: any;

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getData(cep: string) {
    this.openDialog();
    return this.fieldsService.getData(cep).subscribe((data: any) => this.info = data);
  }
}
