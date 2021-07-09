import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { NavesRoutingModule } from './naves-routing.module';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    BuscarComponent,
    ListadoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    NavesRoutingModule
  ]
})
export class NavesModule { }
