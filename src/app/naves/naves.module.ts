import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavesRoutingModule } from './naves-routing.module';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';




@NgModule({
  declarations: [
    BuscarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    NavesRoutingModule
  ]
})
export class NavesModule { }
