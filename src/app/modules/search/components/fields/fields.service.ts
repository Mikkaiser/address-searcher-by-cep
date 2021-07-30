import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FieldsInterface } from '../../interfaces/fields.interface';

@Injectable({
  providedIn: 'root',
})
export class FieldsService {
  constructor(private http: HttpClient) {}

  async getData(cep: string) : Promise<FieldsInterface> {
   return await this.http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
  }
}
