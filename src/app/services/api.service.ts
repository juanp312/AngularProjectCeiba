import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from '../shared/medicamento';
import { Comprar } from '../shared/compra';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHistorialCompras() {
    return this.http.get("http://localhost:8080/compras");
  }

  adicionarMedicamento(medicamento:Medicamento) {
    return this.http.post<Medicamento>("http://localhost:8080/medicamento",medicamento, );
  }
  
  borrarMedicamento(id: BigInteger){
    return this.http.delete<Medicamento>("http://localhost:8080/medicamento/" + id)
  }

  comprarMedicamento(comprar:Comprar){
    return this.http.post<Comprar>("http://localhost:8080/comprarMedicamento", comprar);
  }

}
