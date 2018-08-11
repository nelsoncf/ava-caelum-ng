import { Component, OnInit, Input } from '@angular/core';
import { Foto } from '../foto/foto.model';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  public foto: Foto = new Foto();

  constructor(private servico: FotoService) { }

  ngOnInit() {
  }

  public salvar(): void {
    this.servico
      .cadastrar(this.foto)
      .subscribe(x => console.log(x));
  }

}
