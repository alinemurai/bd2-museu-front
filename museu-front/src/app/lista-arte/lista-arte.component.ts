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
  ];
  //Armazenamento da lista de leiloes
  arteList: Arte[] = []
  
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
    this.arteList = data
  }

  ngOnInit(): void {

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
    let filter = {type: "", _class: ""};
    if(this.filtrosForm.get('tipo').value != "") 
      filter.type = this.filtrosForm.get('tipo').value;
    if(this.filtrosForm.get('classe').value != "") 
      filter._class = this.filtrosForm.get('classe').value ;
    this.arteService.getArtes(filter)
            .subscribe(rst => {
                    this.populateArteList(rst);
        });
  }

  get tipo() { return this.filtrosForm.get('tipo') }
  get classe() { return this.filtrosForm.get('classe') }
}
