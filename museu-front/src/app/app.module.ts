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

@NgModule({
  declarations: [
    AppComponent,
    CadastroArteComponent,
    ListaArteComponent,
    HeaderComponent,
    ListaColecaoComponent,
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
    MatTableModule
  ],
  providers: [
    ArteService,
    ColecaoService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
