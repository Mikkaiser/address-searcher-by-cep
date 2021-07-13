import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor(private http: HttpClient) { }



  getData(cep: string) : any {
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`);  
  }
}
