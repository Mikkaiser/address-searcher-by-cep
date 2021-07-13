import { FieldsService } from './fields.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {

  constructor(private fieldsService: FieldsService) { }

  ngOnInit(): void {

  }

  getData(value: any,  form: any) : any {
    //this function will be created later
    this.fieldsService.getData(value).subscribe((data: any) => this.insertOnFields(data, form));
  }

}
