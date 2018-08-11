import { FotoInterface } from "./foto.interface";

export class Foto implements FotoInterface {

  public titulo: string;
  public url: string;
  public descricao: string;

  public constructor(
    titulo: string = String(),
    url: string = String(),
    descricao: string = String(),
  ) {
    this.titulo = titulo;
    this.url = url;
    this.descricao = descricao;
  }

}