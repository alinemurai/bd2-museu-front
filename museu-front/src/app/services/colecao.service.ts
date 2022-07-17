import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable} from 'rxjs';

import { Arte } from '../models/Arte';


@Injectable()
export class ColecaoService {

  //Rota do backend padrao
  produtoUrl = 'http://localhost:2828/'

  //Opcoes de configuracao da requisicao HTTP
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  //Metodo que recebe todos os produtos cadastrados que estao disponiveis para o usuario participar
  getColecaos(mes: number, ano: number) : Observable<any> {
    //Requisicao GET para o caminho /products, retorna todos os produtos cadastrados
    return this.http.get(`${this.produtoUrl}colecao/${mes}/${ano}`, this.httpOptions)
  }
}