import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArteService } from '../services/arte.service';
import { Arte } from '../models/Arte';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './lista-arte.component.html'
})
export class ListaArteComponent implements OnInit {

  tipoArteList: string[] = []
  public filtrosForm: any
  colunas: string[] = [
    'titulo',
    'descricao',
    'nomeArtista',
    'custo',
    'periodo',
    'ano',
    'cultura',
    'tipo',
    'estilo',
    'colecao',
    'dataCompra',
  ];
  //Variavel utilizada para paginacao
  paginaAtual = 1
  //Armazenamento da lista de leiloes
  arteList: Arte[] = []

  arteListFiltrado: Arte[] = []
  anos: number[] = []
  
  constructor(private routes: Router, private arteService: ArteService) { }

  populateArteList(rst: any): void {
    const data = rst.map((data: any) => ({ 
        id: data.numid,
        nomeArtista: data.nomeArtista,
        periodo: data.periodo,
        ano: data.ano,
        titulo: data.titulo,
        descricao: data.descricao,
        cultura: data.cultura,
        estilo: data.estilo,
        custo: data.custo,
        tipo: data.tipo
    }))   
    //todos os produtos que estao em data sao passados para leilaoList, que renderiza no html
    this.arteList = data
    console.log(this.arteList);

    // this.arteList.forEach((e) => {
    //     if(!this.tipoArteList.includes(e.tipo))
    //       this.tipoArteList.push(e.tipo)      
    // })

    // this.arteListFiltrado = this.arteList
  }

  ngOnInit(): void {

    for(let i = 2022; i >=1700; i--)
    this.anos.push(i)

    this.filtrosForm = new FormGroup({
        tipo: new FormControl(''),
        classe: new FormControl('')
    })  

    //Buscando produtos que o usuario podera participar do leilao, passando o token como parametro
    this.arteService.getArtes()
        .subscribe(rst => {
                //Se houver uma resposta do servidor entao e mapeado todos os dados recebido na constante data
                this.populateArteList(rst);
    });
  }

  filtrar() {
    console.log('this.arteListFiltrado', this.arteList)
    this.arteListFiltrado = this.arteList
    console.log('this.arteListFiltrado', this.arteListFiltrado)
    this.filtraTipoArte()
    this.filtrarClasse()
  }

  filtraTipoArte() {
    if(this.filtrosForm.get('tipo').value != "") {
        const filter = { type: this.filtrosForm.get('tipo').value };
        this.arteService.getArtes(filter)
            .subscribe(rst => {
                    this.populateArteList(rst);
        });
    }    
  }

  filtrarClasse() {
    if(this.filtrosForm.get('classe').value != "") {
      const filter = { _class: this.filtrosForm.get('classe').value };
        this.arteService.getArtes(filter)
            .subscribe(rst => {
                    this.populateArteList(rst);
        });    
    }
  }


  get tipo() { return this.filtrosForm.get('tipo') }
  get classe() { return this.filtrosForm.get('classe') }
}
