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

  dadosGraficoColecao: any = {data: [], categories: [], name: "", type: "bar"};
  anos: number[] = []
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
  //Armazenamento da lista de colecao
  colecaoList: Colecao[] = []

  constructor(private routes: Router, private colecaoService: ColecaoService) { }

  ngOnInit(): void {

    for(let i = 2022; i >=1500; i--)
      this.anos.push(i)

    this.filtrosForm = new FormGroup({
      mes: new FormControl(''),
      ano: new FormControl('')
    })  

    this.colecaoService.getColecaos()
      .subscribe(rst => {
        this.populaListColecao(rst);
      })

  }

  filtrar() {
    let filter = {year: "", month: ""};
    if(this.filtrosForm.get('ano').value != "") 
      filter.year = this.filtrosForm.get('ano').value;
    if(this.filtrosForm.get('mes').value != "") 
      filter.month = this.filtrosForm.get('mes').value;

    this.colecaoService.getColecaos(filter)
            .subscribe(rst => {
                    this.populaListColecao(rst);
        });
  }

  populaListColecao(rst: any) {
    const data = rst.map((data: any) => ({
      nome: data.nome,
      qtd_emprestimos: data.qtd_emprestimos,
      descricao: data.descricao,
      tipo: data.tipo,
      telefone: data.telefone,
      endereco: data.endereco,
      pessoa_contato: data.pessoa_contato
    }))

    this.colecaoList = data
  }
}
