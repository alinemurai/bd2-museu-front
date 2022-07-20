import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class ArtistaService {
  //Rota do backend padrao
  produtoUrl = 'http://localhost:8080/'

  //Opcoes de configuracao da requisicao HTTP
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getArtista() : Observable<any> {
    //Requisicao GET para o caminho /artistas, retorna todos os artistas cadastrados
    return this.http.get(this.produtoUrl+"artista", this.httpOptions)
  }

}