import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component'
import { SolicitacaoComponent } from './solicitacoes/solicitacao/solicitacao.component'
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component'
import { DetalheComponent } from './solicitacoes/detalhe/detalhe.component'
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app', component:  TemplateComponent, 
    children: [
      { path: 'solicitacao', component: SolicitacaoComponent },
      { path: 'amox/solicitacoes', component: SolicitacoesComponent },
      { path: 'amox/solicitacao/:id', component: SolicitacaoComponent },
      { path: 'adm/solicitacoes', component: SolicitacoesComponent },
      { path: 'adm/solicitacao/:id', component: DetalheComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
