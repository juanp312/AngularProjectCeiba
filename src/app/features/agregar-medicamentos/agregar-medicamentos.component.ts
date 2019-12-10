import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../shared/medicamento';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-agregar-medicamentos',
  templateUrl: './agregar-medicamentos.component.html',
  styleUrls: ['./agregar-medicamentos.component.css']
})
export class AgregarMedicamentosComponent implements OnInit {


  public medicamento:Medicamento  = {
    nombreMedicamento: "",
    codigoMedicamento : "",
    disponibilidad: true
  }
  constructor(private service:ApiService) { }


  guardar() {
    this.service.adicionarMedicamento(this.medicamento)
      .subscribe(resp => {
        alert("It was inserted")
      });
  }

  ngOnInit() {
  }

}
