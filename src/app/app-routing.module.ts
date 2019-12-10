import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarMedicamentosComponent } from './features/agregar-medicamentos/agregar-medicamentos.component';  
import { BorrarMedicamentoComponent } from './features/borrar-medicamento/borrar-medicamento.component';  
import { ComprarComponent } from './features/comprar/comprar.component';
import { HistorialComprasComponent } from './features/historial-compras/historial-compras.component';


const routes: Routes = [
  {  
    path: 'medicamento/agregar',  
    component: AgregarMedicamentosComponent  
  },
  {  
    path: 'medicamento/borrar',  
    component: BorrarMedicamentoComponent  
  },
  {  
    path: 'medicamento/comprar',  
    component: ComprarComponent
  },
  {  
    path: 'comprar/historialCompras',  
    component: HistorialComprasComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
