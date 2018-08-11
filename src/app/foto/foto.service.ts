import { HttpClient } from '@angular/common/http';
import { Foto } from './foto.model';
import { Observable } from '../../../node_modules/rxjs';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private url: string = String('http://localhost:3000/v1/fotos');
  public constructor(private http: HttpClient) { }

  public listar(): Observable<Object> {
    return this.http
      .get(this.url);
  }

  public cadastrar(foto: Foto): Observable<Object> {
    return this.http
      .post(this.url, foto);
  }

  public atualizar() { }

  public deletar() { }

  public pesquisar(): Foto {
    return new Foto();
  }

}