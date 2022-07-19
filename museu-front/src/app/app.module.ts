import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroArteComponent } from './cadastro-arte/cadastro-arte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { ListaArteComponent } from './lista-arte/lista-arte.component';
import { HeaderComponent } from './header/header.component';
import { ArteService } from './services/arte.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListaColecaoComponent } from './lista-colecao/lista-colecao.component';
import { ColecaoService } from './services/colecao.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GraficoComponent } from './grafico/grafico.component';
import { ListaArteDataComponent } from './lista-arte-data/lista-arte-data.component';
import { GraficoColecaoComponent } from './grafico-colecao/grafico-colecao.component';
import { ListaEmprestadosComponent } from './lista-emprestados/lista-emprestados.component';
import { Artista } from './models/Artista';
import { ArtistaService } from './services/artista.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroArteComponent,
    ListaArteComponent,
    HeaderComponent,
    ListaColecaoComponent,
    GraficoComponent,
    ListaArteDataComponent,
    GraficoColecaoComponent,
    ListaEmprestadosComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    NgApexchartsModule
  ],
  providers: [
    ArteService,
    ColecaoService,
    ArtistaService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
