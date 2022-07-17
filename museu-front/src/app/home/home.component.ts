import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArteService } from '../services/arte.service';
import { Arte } from '../models/Arte';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

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
    'colecao'
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
  comprado: 1,
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
},]

arteListFiltrado: Arte[] = []
  
  constructor(private routes: Router, private arteService: ArteService) { }

  ngOnInit(): void {

    this.filtrosForm = new FormGroup({
      tipoObjetoArte: new FormControl('')
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

  filtraTipoArte() {
    this.arteListFiltrado = this.arteList.filter(e => e.tipoObjetoArte == this.filtrosForm.get('tipoObjetoArte').value)    
  }

  get tipoObjetoArte() { return this.filtrosForm.get('tipoObjetoArte') }
}
