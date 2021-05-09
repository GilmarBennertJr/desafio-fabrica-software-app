import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solicitacao } from '../solicitacao.model';
import { SolicitacaoService } from '../solicitacao.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html'
})
export class DetalheComponent implements OnInit {

  solicitacao:Solicitacao = new Solicitacao()

  constructor(
    private route: ActivatedRoute,
    private solicitacaoService: SolicitacaoService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.solicitacaoService.findById(id)
      .subscribe(response => {
        this.solicitacao = response
      })
  }

}
