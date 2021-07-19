import { FieldsInterface } from './../../interfaces/fields.interface';
import { FieldsService } from './fields.service';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  constructor(private fieldsService: FieldsService) {}

  info?: any; 

  ngOnInit(): void {}


  getData(cep: string): Observable<> {
    return this.fieldsService.getData(cep).subscribe((data: any) => this.info = data);
  }
}
