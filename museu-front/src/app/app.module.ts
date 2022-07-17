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
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ArteService } from './services/arte.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CadastroArteComponent,
    HomeComponent,
    HeaderComponent
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
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
