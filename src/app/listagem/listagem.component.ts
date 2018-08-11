import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';
@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  public fotos;

  constructor(private servico: FotoService) {
    servico
      .listar()
      .subscribe(fotos => this.fotos = fotos);
  }

  ngOnInit() {
  }

}
