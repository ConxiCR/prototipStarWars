import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    BuscarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavesModule { }
