import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroArteComponent } from "./cadastro-arte/cadastro-arte.component";
import { HomeComponent } from './home/home.component';

//Aqui e configurado todas as rotas disponiveis no sistema
export const rootRouterConfig: Routes = [
    { path: '', component: HomeComponent},
    { path: 'CadastroArte', component: CadastroArteComponent},
    { path: 'Home', component: HomeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
