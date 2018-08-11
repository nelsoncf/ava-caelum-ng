import { Component, OnInit, Input } from '@angular/core';
import { Foto } from '../foto/foto.model';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  public foto: Foto = new Foto();
  public fotoId: string;

  constructor(
    private servico: FotoService,
    private rotaAtivada: ActivatedRoute,
    private roteador: Router
  ) { }

  ngOnInit() {

    this.fotoId = this.rotaAtivada.snapshot.params.id;
    if (this.fotoId) {
      this.servico.pesquisar(this.fotoId)
        .subscribe(
          fotoApi => this.foto = fotoApi
        );
    }

  }

  public salvar(): void {

    if (this.foto._id) {
      this.servico.atualizar(this.foto)
        .subscribe(
          () => {
            console.log(`${this.foto.titulo}`);
            this.roteador.navigate(['']);
          }
        );
    } else {
      this.servico
      .cadastrar(this.foto)
      .subscribe(x => this.roteador.navigate(['']));
    }
  }

}
