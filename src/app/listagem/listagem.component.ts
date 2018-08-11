import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { Foto } from '../foto/foto.model';
@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  public fotos;

  listaFotos: Foto[];

  constructor(private servico: FotoService) {
    this.servico
      .listar()
      .subscribe(fotos => this.fotos = fotos);
  }

  ngOnInit() {
  }

  apagar(fotoApagada: Foto) {
    this.servico
      .deletar(fotoApagada)
      .subscribe(
        () => {
          console.log(fotoApagada);
          this.listaFotos = this.listaFotos.filter( f => f !== fotoApagada);
        },
        erro => console.log(erro)
      );
  }

}
