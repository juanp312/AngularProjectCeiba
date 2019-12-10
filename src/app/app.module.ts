import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';   
import { AppComponent } from './app.component';
import { AgregarMedicamentosComponent } from './features/agregar-medicamentos/agregar-medicamentos.component';
import { BorrarMedicamentoComponent } from './features/borrar-medicamento/borrar-medicamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ComprarComponent } from './features/comprar/comprar.component';
import { HistorialComprasComponent } from './features/historial-compras/historial-compras.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    AgregarMedicamentosComponent,
    BorrarMedicamentoComponent,
    ComprarComponent,
    HistorialComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
