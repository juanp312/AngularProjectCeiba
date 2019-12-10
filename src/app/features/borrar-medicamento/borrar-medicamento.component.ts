import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../shared/medicamento';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-borrar-medicamento',
  templateUrl: './borrar-medicamento.component.html',
  styleUrls: ['./borrar-medicamento.component.css']
})
export class BorrarMedicamentoComponent implements OnInit {

  id: BigInteger
  constructor(private service:ApiService) { }

  borrar() {
    this.service.borrarMedicamento(this.id)
    .subscribe(resp => {
      alert("It was deleted")
    });
  }

  ngOnInit() {
  }

}
