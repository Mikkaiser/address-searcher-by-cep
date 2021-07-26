import { FieldsService } from './fields.service';
import { Component, Output, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatDialogComponent } from "../mat-dialog/mat-dialog.component";

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  constructor(private fieldsService: FieldsService, public dialog: MatDialog) { }

  info: any;

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: {
        cep: this.info.cep,
        logradouro: this.info.logradouro,
        complemento: this.info.complemento,
        bairro: this.info.bairro,
        localidade: this.info.localidade,
        uf: this.info.uf,
        ibge: this.info.ibge,
        gia: this.info.gia,
        ddd: this.info.ddd,
        siafi: this.info.siafi
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getData(cep: string): any {
    this.fieldsService.getData(cep).subscribe((data: any) => this.info = data);
    this.openDialog();
  }
}
