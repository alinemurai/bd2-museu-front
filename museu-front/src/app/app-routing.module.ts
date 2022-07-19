import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroArteComponent } from "./cadastro-arte/cadastro-arte.component";
import { ListaArteDataComponent } from './lista-arte-data/lista-arte-data.component';
import { ListaArteComponent } from './lista-arte/lista-arte.component';
import { ListaColecaoComponent } from './lista-colecao/lista-colecao.component';
import { ListaEmprestadosComponent } from './lista-emprestados/lista-emprestados.component';


//Aqui e configurado todas as rotas disponiveis no sistema
export const rootRouterConfig: Routes = [
    { path: '', component: ListaArteComponent},
    { path: 'CadastroArte', component: CadastroArteComponent},
    { path: 'ListaArte', component: ListaArteComponent},
    { path: 'ListaArteData', component: ListaArteDataComponent},
    { path: 'ListaColecao', component: ListaColecaoComponent},
    { path: 'Lista de Emprestados', component: ListaEmprestadosComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
