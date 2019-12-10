import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Comprar } from 'src/app/shared/compra';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {
  historial: Comprar [] = []
  items = ["one", "two", "tree"];
  constructor(private service:ApiService) { }

  historialCompras(){
    this.service.getHistorialCompras()
    .subscribe(data => {
      for (const d of (data as any)) {
        this.historial.push({
          codigoMedicamento: d.codigoMedicamento,
          numeroIdentidad: d.numeroIdentidad,
          edad: d.edad,
          medioPago: d.medioPago,
          recetaMedica: d.recetaMedica,
          cantidad: d.cantidad
        });
      }
      console.log(this.historial);
    });
  }

  ngOnInit() {
  }

}
