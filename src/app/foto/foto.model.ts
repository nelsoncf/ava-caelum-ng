import { FotoInterface } from './foto.interface';

export class Foto implements FotoInterface {

  public titulo: string;
  public url: string;
  public descricao: string;
  public _id: string;

  public constructor(
    titulo: string = String(),
    url: string = String(),
    descricao: string = String(),
    _id: string = String()
  ) {
    this.titulo = titulo;
    this.url = url;
    this.descricao = descricao;
    this._id = _id;
  }

}