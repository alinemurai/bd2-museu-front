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
    'nome_artista',
    'custo',
    'periodo',
    'ano',
    'cultura',
    'tipoObjetoArte',
    'estilo',
    'colecao',
    'dataCompra',
  ];
  //Variavel utilizada para paginacao
  paginaAtual = 1
  //Armazenamento da lista de leiloes
  arteList: Arte[] = [ {
    numid: '1',
    nome_artista: 'nome artista',
    periodo: 'periodo',
    ano: 2000,
    titulo: 'titulo',
    descricao: 'descricao',
    cultura: 'cultura',
    estilo: 'estilo',
    custo: 2,
    tipoObjetoArte: 'objetoArte',
    colecao: 'colecao',
    comprado: 1,
    dataCompra: "10/03/2021",
    mesCompra: 3,
    anoCompra: 2021
  },
  {numid: '2',
  nome_artista: 'nome artista',
  periodo: 'periodo',
  ano: 2000,
  titulo: 'titulo',
  descricao: 'descricao',
  cultura: 'cultura',
  estilo: 'estilo',
  custo: 2,
  tipoObjetoArte: 'o2',
  colecao: 'colecao',
  comprado: 0,
  dataCompra: "10/03/2021",
  mesCompra: 3,
  anoCompra: 2021
},
{numid: '3',
  nome_artista: 'nome artista',
  periodo: 'periodo',
  ano: 2000,
  titulo: 'titulo',
  descricao: 'descricao',
  cultura: 'cultura',
  estilo: 'estilo',
  custo: 2,
  tipoObjetoArte: 'o2',
  colecao: 'colecao',
  comprado: 1,
  dataCompra: "10/03/2021",
  mesCompra: 3,
  anoCompra: 2021
},]

  arteListFiltrado: Arte[] = []
  anos: number[] = []
  
  constructor(private routes: Router, private arteService: ArteService) { }

  ngOnInit(): void {

    for(let i = 2022; i >=1700; i--)
    this.anos.push(i)

    this.filtrosForm = new FormGroup({
      tipoObjetoArte: new FormControl(''),
      classe: new FormControl(''),
      mes: new FormControl(''),
      ano: new FormControl('')
    })  

    //Buscando produtos que o usuario podera participar do leilao, passando o token como parametro
    /*this.arteService.getArtes()
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

    this.arteList.forEach((e) => {
      if(!this.tipoArteList.includes(e.tipoObjetoArte))
        this.tipoArteList.push(e.tipoObjetoArte)      
    })

    this.arteListFiltrado = this.arteList
  }

  filtrar() {
    this.arteListFiltrado = this.arteList
    this.filtraTipoArte()
    this.filtrarClasse()
    this.filtrarMes()
    this.filtrarAno()
  }

  filtraTipoArte() {
    if(this.filtrosForm.get('tipoObjetoArte').value != "")
      this.arteListFiltrado = this.arteListFiltrado.filter(e => e.tipoObjetoArte == this.filtrosForm.get('tipoObjetoArte').value)    
  }

  filtrarClasse() {
    if(this.filtrosForm.get('classe').value != "")
      this.arteListFiltrado = this.arteListFiltrado.filter(e => e.comprado == this.filtrosForm.get('classe').value)    
  }

  filtrarMes() {
    if(this.filtrosForm.get('mes').value != "")
      this.arteListFiltrado = this.arteListFiltrado.filter(e => e.mesCompra == this.filtrosForm.get('mes').value)    
  }

  filtrarAno() {
    if(this.filtrosForm.get('ano').value != "")
      this.arteListFiltrado = this.arteListFiltrado.filter(e => e.anoCompra == this.filtrosForm.get('ano').value)    
  }

  get tipoObjetoArte() { return this.filtrosForm.get('tipoObjetoArte') }
  get classe() { return this.filtrosForm.get('classe') }
}