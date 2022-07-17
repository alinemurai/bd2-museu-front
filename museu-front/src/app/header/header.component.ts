import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private routes: Router,
  ) { }
  
  //No inicio da pagina e atualizado o token para saber quais menus estarao disponiveis para o usuario
  ngOnInit(): void {
   
  }


}
