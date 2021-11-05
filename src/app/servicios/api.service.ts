import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  cargaAPI() {
    return 'http://localhost:3000/'
  }

}
export class transaccion {
  transaccion: any;
}
