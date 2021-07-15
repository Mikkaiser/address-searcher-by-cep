import { FieldsService } from './fields.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  constructor(private fieldsService: FieldsService) {}

  ngOnInit(): void {}

  getData(value: any, form: any): any {
    this.fieldsService
      .getData(value)
      .subscribe((data: any) => this.insertOnFields(data, form));
  }

  insertOnFields(data: any, form: any) {
    form.setValue({
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      uf: data.uf
    });
  }
}
