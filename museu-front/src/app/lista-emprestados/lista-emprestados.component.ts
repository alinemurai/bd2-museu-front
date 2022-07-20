import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Colecao } from '../models/Colecao';
import { ColecaoService } from '../services/colecao.service';

@Component({
  selector: 'app-lista-emprestados',
  templateUrl: './lista-emprestados.component.html',
  styleUrls: ['./lista-emprestados.component.css']
})
export class ListaEmprestadosComponent implements OnInit {

  public filtrosForm: any
  anos: number[] = []
  colunas: string[] = [
    'nome',
    'quantidade',
  ];
  //Armazenamento da lista de colecao
  colecaoList: Colecao[] = []
  filtroColecao: Colecao[] = []

  constructor(private colecaoService: ColecaoService) { }

  ngOnInit(): void {
    for(let i = 2022; i >=1500; i--)
    this.anos.push(i)

  this.filtrosForm = new FormGroup({
    mes: new FormControl(''),
    ano: new FormControl(''),
    nome: new FormControl(''),
  })  

  this.colecaoService.getColecaos()
    .subscribe(rst => {
      const data = rst.map((data: any) => ({
        nome: data.nome
      }))
  
      this.filtroColecao = data
    })

  this.colecaoService.getColecaos2()
    .subscribe(rst => {
      this.populaListColecao(rst);
    })
  }

  populaListColecao(rst: any) {
    const data = rst.map((data: any) => ({
      nome: data.nome,
      quantidade: data.quantidade
    }))

    this.colecaoList = data
  }

  filtrar() {
    let filter = {year: "", month: "", collecionName: ""};
    if(this.filtrosForm.get('ano').value != "") 
      filter.year = this.filtrosForm.get('ano').value;
    if(this.filtrosForm.get('mes').value != "") 
      filter.month = this.filtrosForm.get('mes').value;
    if(this.filtrosForm.get('nome').value != "")
    filter.collecionName = this.filtrosForm.get('nome').value;

    this.colecaoService.getColecaos2(filter)
            .subscribe(rst => {
                    this.populaListColecao(rst);
        });
  }
}
