import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { NavesRoutingModule } from './naves-routing.module';
import { MaterialModule } from '../material/material.module';

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
    FormsModule,
    MaterialModule,
    NavesRoutingModule
  ]
})
export class NavesModule { }
