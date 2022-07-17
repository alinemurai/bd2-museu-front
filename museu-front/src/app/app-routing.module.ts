import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroArteComponent } from "./cadastro-arte/cadastro-arte.component";
import { ListaArteComponent } from './lista-arte/lista-arte.component';
import { ListaColecaoComponent } from './lista-colecao/lista-colecao.component';


//Aqui e configurado todas as rotas disponiveis no sistema
export const rootRouterConfig: Routes = [
    { path: '', component: ListaArteComponent},
    { path: 'CadastroArte', component: CadastroArteComponent},
    { path: 'ListaArte', component: ListaArteComponent},
    { path: 'ListaColecao', component: ListaColecaoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
