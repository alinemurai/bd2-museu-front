import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable} from 'rxjs';

import { Arte } from '../models/Arte';


@Injectable()
export class ColecaoService {

  //Rota do backend padrao
  produtoUrl = 'http://localhost:8080/'

  //Opcoes de configuracao da requisicao HTTP
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAll() : Observable<any> {
    //Requisicao GET para o caminho /products, retorna todos os produtos cadastrados
    return this.http.get(this.produtoUrl+"colecao", this.httpOptions)
  }

  //Metodo que recebe todos os produtos cadastrados que estao disponiveis para o usuario participar
  getColecaos(filter?: any) : Observable<any> {
    let url = `${this.produtoUrl}api/collection`;
    if (filter) {
        if (filter.year) {
            url += `?year=${filter.year}`;
        }
        if (filter.month) {
            if (filter.year) url += '&';
            else url += '?';
            url += `month=${filter.month}`;
        }
    }
    return this.http.get(url, this.httpOptions)
  }

  getColecaos2(filter?: any) : Observable<any> {
    let url = `${this.produtoUrl}api/art-object/borrowed/count`;
    if (filter) {
        if (filter.year) {
            url += `?year=${filter.year}`;
        }
        if (filter.month) {
            if (filter.year) url += '&';
            else url += '?';
            url += `month=${filter.month}`;
        }
        if(filter.collectionName) {
          if (filter.year || filter.month) url += '&';
          else url += '?';
            url += `collectionName=${filter.collectionName}`;
        }
    }
    return this.http.get(url, this.httpOptions)
  }
}
