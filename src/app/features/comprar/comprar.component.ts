import { Component, OnInit } from '@angular/core';
import { Comprar } from '../../shared/compra';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  public comprar:Comprar  = {
    codigoMedicamento : "",
    numeroIdentidad : 0,
    edad : 0,
    medioPago : "",
    recetaMedica : true,
    cantidad :  1
  }
  constructor(private service:ApiService) { }

  comprarMedicamento() {
    console.log(this.comprar);
    this.service.comprarMedicamento(this.comprar)
      .subscribe(resp => {
        alert("It was bought")
      });
  }

  ngOnInit() {
  }

}
