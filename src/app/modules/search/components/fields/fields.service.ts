import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FieldsService {
  constructor(private http: HttpClient) {}

  getData(cep: string): Observable<Object> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
