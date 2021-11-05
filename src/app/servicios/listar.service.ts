import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  API: string;

  constructor(
    private api: ApiService,
    private http: HttpClient,
  ) {
    this.API = this.api.cargaAPI();
  }

  listar(){
    return this.http.get<transaccion>(this.API+'libros');
  }
}
export class transaccion {
  transaccion: any;
}

