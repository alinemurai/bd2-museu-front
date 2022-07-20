import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArteService } from '../services/arte.service';
import { Arte } from '../models/Arte';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-lista-arte-data',
  templateUrl: './lista-arte-data.component.html'
})
export class ListaArteDataComponent implements OnInit {

  dadosGrafico: any = {data: [], categories: [], name: "", type: "line"};

  tipoArteList: string[] = []
  public filtrosForm: any
  colunas: string[] = [
    'titulo',
    'tipo',
    'custo',
    'estilo',
    'dataCompra',
  ];

  //Armazenamento da lista de leiloes
  arteList: Arte[] = []
  anos: number[] = []
  
  constructor(private routes: Router, private arteService: ArteService) { }

  ngOnInit(): void {

    //anos disponiveis no filtro
    for(let i = 2022; i >=1500; i--)
      this.anos.push(i)

    //variaveis para filtro de mes e ano
    this.filtrosForm = new FormGroup({
      mes: new FormControl(''),
      ano: new FormControl('')
    })  

    console.log("antes do getArtes")
    //Buscando produtos que o usuario podera participar do leilao, passando o token como parametro
    this.arteService.getArtesCompradas()
    .subscribe(rst => {
      console.log("para entrar no papulate")
      this.populateArteList(rst)
    })
  }

  filtrar() {
    let filter = {year: "", month: ""};
    if(this.filtrosForm.get('ano').value != "") 
      filter.year = this.filtrosForm.get('ano').value;
    if(this.filtrosForm.get('mes').value != "") 
      filter.month = this.filtrosForm.get('mes').value;

    this.arteService.getArtesCompradas(filter)
            .subscribe(rst => {
                    this.populateArteList(rst);
        });
  }

  populateArteList(rst: any): void {
   //Se houver uma resposta do servidor entao e mapeado todos os dados recebido na constante data
   const data = rst.map((data: any) => ({ 
    titulo: data.titulo,
    tipo: data.tipo,
    custo: data.custo,
    estilo: data.estilo,
    dataCompra: data.dataCompra,
  }))   

  this.arteList = data

  //preenchendo dados do grafico de gasto
  let yMesAnoCompra: number[] = []
  let xMesAnoCompra: string[] = []
  let arteListOrdenado = this.arteList.sort(function (a, b) {
    if(a.anoCompra < b.anoCompra)
      return -1;
    
    if(a.anoCompra > b.anoCompra)
      return 1;
    else
      if(a.mesCompra < b.mesCompra)
        return -1;
      else
        return 1;
  })
  this.arteList.forEach(a => {

    if(xMesAnoCompra.includes(a.dataCompra.substring(3))) {
      yMesAnoCompra[xMesAnoCompra.indexOf(a.dataCompra.substring(3))] +=  a.custo
    }
    else {
      yMesAnoCompra.push(a.custo)
    }

    //se nao houver no array o mes ano do objeto x, armazena no array
    if(!xMesAnoCompra.includes(a.dataCompra.substring(3)))
      xMesAnoCompra.push(a.dataCompra.substring(3))
  })

  console.log("dadosGraficos", this.dadosGrafico)
  this.dadosGrafico.data = yMesAnoCompra
  this.dadosGrafico.categories = xMesAnoCompra
  this.dadosGrafico.name = "Gastos do mês"
  }

  get tipo() { return this.filtrosForm.get('tipo') }
  get classe() { return this.filtrosForm.get('classe') }
}
