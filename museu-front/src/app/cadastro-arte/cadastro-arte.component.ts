import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ArteService } from '../services/arte.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Colecao } from '../models/Colecao';
import { Artista } from '../models/Artista';
import { Observable } from 'rxjs';
import { ColecaoService } from '../services/colecao.service';
import { ArtistaService } from '../services/artista.service';

@Component({
  selector: 'app-cadastro-arte',
  templateUrl: './cadastro-arte.component.html'
})
export class CadastroArteComponent implements OnInit {

  public cadastroForm: any
  colecao$!: Observable<Colecao[]>;
  artitas$!: Observable<Artista[]>;

  constructor(private routes: Router, private cadastroArteService: ArteService, private colecaoService: ColecaoService, private artistaService: ArtistaService) { }
  radios: Array<any> = [
    { name: 'Comprado', value: '1' },
    { name: 'Emprestado', value: '0' },
];

  ngOnInit(): void {

    //Definindo inputs do form com suas respectivas validacoes
    this.cadastroForm= new FormGroup({

      titulo: new FormControl('', [Validators.required, Validators.minLength(2), 
                                    Validators.maxLength(50)]),
      descricao: new FormControl('', [Validators.required, Validators.minLength(2), 
                                    Validators.maxLength(150)]),
      cultura: new FormControl('', [Validators.required, Validators.minLength(2), 
                                      Validators.maxLength(150)]),
      estilo: new FormControl('', [Validators.required, Validators.minLength(2), 
                                        Validators.maxLength(150)]),
      nomeArtista: new FormControl('', [Validators.required, Validators.minLength(2), 
                                          Validators.maxLength(150)]),
      tipo: new FormControl('', [Validators.required, Validators.minLength(2), 
                                            Validators.maxLength(150)]),
      custo: new FormControl('', [Validators.required]),
      
      ano: new FormControl('', [Validators.min(1950), Validators.max(2023)]),

      periodo: new FormControl('', [Validators.required, Validators.minLength(2), 
                                              Validators.maxLength(150)]),

      comprado: new FormControl('', [Validators.required]),
      
      colecao: new FormControl(''),
      
      dataCompra: new FormControl('', [Validators.required])
    });
    this.colecao$ = this.colecaoService.getAll();
    this.artitas$ = this.artistaService.getArtista();
    
  }

  //Ao chamar este metodo, e enviado os valores inseridos pelo usuario para o servico, juntamente com o token e retornado uma
  //resposta do back
  cadastrarArte() : void {
    this.cadastroArteService.addArte(this.cadastroForm.value)
    //Caso a resposta do back seja positva (status 200), e informado que o cadastro foi realizado com sucesso
    .subscribe(rst => {
      Swal.fire({
          icon: 'success',
           title: 'Sucesso',
           text: 'Cadastro de leilao realizado com sucesso'
       });
       //Redirecionando o usuario para a tela de Home
      this.routes.navigate(['/Home'])
      }, 
      //Caso a resposta do back seja negativa (status 400, 404, etc), e informado o erro pela mensagem
      rst =>{
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: rst.error
      })
    })
  }

 //Formatacao do valor inciado inserido pelo usuario 
 formatarValorFinal() {
  if(!this.cadastroForm.get('custo').value.includes(',') && this.cadastroForm.get('custo').value != '') {
    this.cadastroForm.get('custo').setValue(this.cadastroForm.get('custo').value + ',00')
  }
 }

 changeComprado(event: any) {
  this.cadastroForm.get('comprado').setValue(event.value);
 }

 //Metodos facilitadores para validar os dados no arquivo .html
  get titulo() { return this.cadastroForm.get('titulo') }

  get descricao() { return this.cadastroForm.get('descricao')}

  get cultura() { return this.cadastroForm.get('cultura') }

  get dataFinal() { return this.cadastroForm.get('dataFinal') }

  get estilo() { return this.cadastroForm.get('estilo') }

  get nomeArtista() { return this.cadastroForm.get('nomeArtista') }

  get tipo() { return this.cadastroForm.get('tipo') }

  get custo() { return this.cadastroForm.get('custo') }

  get ano() { return this.cadastroForm.get('ano') }

  get periodo() { return this.cadastroForm.get('periodo') }

  get comprado() { return this.cadastroForm.get('comprado')}

  get colecao() { return this.cadastroForm.get('colecao')}

  get dataCompra() { return this.cadastroForm.get('dataCompra')}
}
