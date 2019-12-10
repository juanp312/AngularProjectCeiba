import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';   
import { AppComponent } from './app.component';
import { AgregarMedicamentosComponent } from './features/agregar-medicamentos/agregar-medicamentos.component';
import { BorrarMedicamentoComponent } from './features/borrar-medicamento/borrar-medicamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ComprarComponent } from './features/comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarMedicamentosComponent,
    BorrarMedicamentoComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
