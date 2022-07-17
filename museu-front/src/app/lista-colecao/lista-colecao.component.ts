import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ColecaoService } from '../services/colecao.service';
import { Colecao } from '../models/Colecao';

@Component({
  selector: 'app-lista-colecao',
  templateUrl: './lista-colecao.component.html'
})
export class ListaColecaoComponent implements OnInit {

  anos: number[] = []
  tipoArteList: string[] = []
  public filtrosForm: any
  colunas: string[] = [
    'nome',
    'qtd_emprestimos',
    'descricao',
    'tipo',
    'telefone',
    'endereco',
    'pessoa_contato'
  ];
  //Variavel utilizada para paginacao
  paginaAtual = 1
  //Armazenamento da lista de leiloes
  colecaoList: Colecao[] = []

  constructor(private routes: Router, private colecaoService: ColecaoService) { }

  ngOnInit(): void {

    for(let i = 2022; i >=1700; i--)
      this.anos.push(i)

    this.filtrosForm = new FormGroup({
      mes: new FormControl(''),
      ano: new FormControl('')
    })  

    this.populaListColecao(0, 0);
  }

  filtrar() {
    let mes = this.filtrosForm.get('mes').value == "" ? 0 : this.filtrosForm.get('mes').value
    let ano = this.filtrosForm.get('ano').value == "" ? 0 : this.filtrosForm.get('ano').value
    this.populaListColecao(mes, ano)
  }

  populaListColecao(mes: number, ano: number) {
    //Buscando produtos que o usuario podera participar do leilao, passando o token como parametro
    /*this.colecaoService.getColecaos()
    .subscribe(rst => {
      //Se houver uma resposta do servidor entao e mapeado todos os dados recebido na constante data
      const data = rst.data.map((data: any) => ({ 
        id: data._id,
        dataFinal: data.dataFinal, 
        dataInicio: data.dataInicio, 
        localizacao: data.localizacao, 
        nome: data.nome, 
        valorInicial: data.valorInicial,
        fotoLeilao: environment.FILES+data.urlImagem,
        usuario: data.usuario,
        status: data.status
      }))   
      //todos os produtos que estao em data sao passados para leilaoList, que renderiza no html
      this.leilaoList = data
    })*/
  }
}
