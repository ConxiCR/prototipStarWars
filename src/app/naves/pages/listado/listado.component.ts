import { Component, OnInit } from '@angular/core';
import { NavesService } from '../../services/naves.service';
import { Nave } from '../../interfaces/naves.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  naves: Nave[] = [];

  constructor( private navesService: NavesService) { }

  ngOnInit(): void {

    this.navesService.getNaves()
      .subscribe(console.log);
      //.subscribe( naves => this.naves = naves );
  }

}
