import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  constructor(
    private service: GifsService,
  ){

  }

@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar() {
    const texto = this.txtBuscar.nativeElement.value;
    if (texto.trim().length ===0 ){
      return;
    }
    this.service.buscarGifs(texto);
    console.log(texto);
    this.txtBuscar.nativeElement.value = '';
  }
}
