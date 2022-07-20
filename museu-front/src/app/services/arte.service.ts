import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Arte } from '../models/Arte';


@Injectable()
export class ArteService {

  //Rota do backend padrao
  produtoUrl = 'http://localhost:8080/'

  //Opcoes de configuracao da requisicao HTTP
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
    
  //Metodo que envia o produto a ser cadastrado para o back
  addArte(arte: Arte) : Observable<any> {
    
    //Atualizando o header da requisicao para enviar o token
    //Fazendo a requisicao com o metodo POST para o metodo /products do back, enviando todos os dados no formData
    //Sera retornado uma resposta para saber se foi cadastrado com sucesso
    return this.http.post(this.produtoUrl+"artes", arte, this.httpOptions)
  }

  //Metodo que recebe todos os produtos cadastrados que estao disponiveis para o usuario participar
  getArtes(filter?: any) : Observable<any> {
    let url = `${this.produtoUrl}api/art-object`;
    if (filter) {
        if (filter.type) {
            url += `?type=${filter.type}`;
        }
        if (filter._class) {
            if (filter.type) url += '&';
            else url += '?';
            url += `_class=${filter._class}`;
        }
    }
    //Requisicao GET para o caminho /products, retorna todos os produtos cadastrados
    return this.http.get(url, this.httpOptions)
  }

  //Metodo que recebe todos os produtos cadastrados que estao disponiveis para o usuario participar
  getArtesCompradas(filter?: any) : Observable<any> {
    let url = `${this.produtoUrl}api/art-object/permanent-collection`;
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
  //Requisicao GET para o caminho /products, retorna todos os produtos cadastrados
  return this.http.get(url, this.httpOptions)
  }
}
