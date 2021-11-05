import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  API: string;

  constructor(
    private api: ApiService,
    private http: HttpClient,
  ) {
    this.API = this.api.cargaAPI();
  }

  crearForm(payload: any) {
    return this.http.post<transaccion>(this.API + 'operaciones', payload);
  }
}
export class transaccion {
  transaccion: any;
}

