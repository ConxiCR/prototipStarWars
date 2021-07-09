import { Component, OnInit } from '@angular/core';
import { NavesService } from '../../services/naves.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor( private navesService: NavesService) { }

  ngOnInit(): void {
    this.navesService.getNaves()
      .subscribe(resp => console.log(resp));
  }

}
