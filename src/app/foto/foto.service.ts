import { HttpClient } from '@angular/common/http';
import { Foto } from './foto.model';
import { Observable } from '../../../node_modules/rxjs';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private url: string = String('http://localhost:3000/v1/fotos/');
  public constructor(private http: HttpClient) { }

  public listar(): Observable<Foto[]> {
    return this.http
      .get<Foto[]>(this.url);
  }

  public cadastrar(foto: Foto): Observable<Object> {
    return this.http
      .post(this.url, foto);
  }

  public atualizar(foto: Foto): Observable<Foto> {
    return this.http.put<Foto>(this.url + foto._id, foto)

  }

  public deletar(foto: Foto) {
     return this.http.delete(this.url + foto._id);
   }

  public pesquisar(fotoId: string): Observable<Foto> {
    return this.http.get<Foto>(this.url + fotoId);
  }

}
