import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Solicitacao } from './solicitacao.model';
import { SolicitacaoService } from './solicitacao.service';
import { Filter } from './filter.model';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {

  isAdministrativo:boolean = false

  solicitacoes:Solicitacao[] = []
  isFirst:boolean = false
  isLast:boolean = false
  currentPage:number = 0
  totalPages:number = 0
  perPage:number = 10
  filter:Filter = new Filter(this.perPage, this.currentPage, '','','')

  FilterForm: FormGroup = this.formBuilder.group({
    solicitante: this.formBuilder.control(''),
    descricaoProduto: this.formBuilder.control(''),
    status: this.formBuilder.control(''),
  });

  constructor(private router:Router, private solicitacaoService: SolicitacaoService, private formBuilder: FormBuilder) { 
    this.isAdministrativo = router.url === '/app/adm/solicitacoes'
  };

  ngOnInit(): void {    
    this.filter = new Filter(this.perPage, this.currentPage, '', '', '')
    if (!this.isAdministrativo) {
      this.filter.status = "Pendente";
    }
    this.search();
  }

  nextPage() {    
    this.currentPage ++;
    this.filter = new Filter(this.perPage, this.currentPage, this.FilterForm.value.status, this.FilterForm.value.solicitante, this.FilterForm.value.descricaoProduto)
    this.search();
  }

  previousPage() {
    this.currentPage --;
    this.filter = new Filter(this.perPage, this.currentPage, this.FilterForm.value.status, this.FilterForm.value.solicitante, this.FilterForm.value.descricaoProduto)
    this.search();
  }

  findByFilter() {
    this.currentPage = 0;
    this.filter = new Filter(this.perPage, this.currentPage, this.FilterForm.value.status, this.FilterForm.value.solicitante, this.FilterForm.value.descricaoProduto)
    this.search();
  }

  search() {
    this.solicitacaoService.findAll(this.filter)
      .subscribe((result) => {
        this.solicitacoes = result.content
        this.isFirst = result.first
        this.isLast = result.last
        this.totalPages = result.totalPages
      })
  }

  openSolicitacao(id:number) {
    if (this.isAdministrativo) {
      this.router.navigate([`/app/adm/solicitacao/${id}`])
    } else {
      this.router.navigate([`/app/amox/solicitacao/${id}`])
    }
  }

}