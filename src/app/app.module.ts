import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { SolicitacaoComponent } from './solicitacoes/solicitacao/solicitacao.component';
import { DetalheComponent } from './solicitacoes/detalhe/detalhe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolicitacoesComponent,
    SolicitacaoComponent,
    DetalheComponent,
    NotFoundComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NoopAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    CurrencyMaskModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
