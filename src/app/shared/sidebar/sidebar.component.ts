import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private service:GifsService
  ) { }
  get historial(){
    return this.service.historial;
  }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.service.buscarGifs(termino);
  }

}
