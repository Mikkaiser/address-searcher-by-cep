import { FieldsService } from './fields.service';
import { Component, OnInit } from '@angular/core';
import { FieldsInterface } from '../../interfaces/fields.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  constructor(private fieldsService: FieldsService) { }

  info?: any;

  ngOnInit(): void {
  }

  async getData(cep: string): Promise<FieldsInterface> {
    return await this.fieldsService.getData(cep)
    .then((data: any) => this.info = data)
    .catch((error: HttpErrorResponse) => { message: 'Is not possible to search this address. Error:' + error });
  }
}
