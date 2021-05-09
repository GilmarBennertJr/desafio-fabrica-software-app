import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitacao } from '../solicitacao.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SolicitacaoService } from '../solicitacao.service'

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html'
})
export class SolicitacaoComponent implements OnInit {
  solicitacaoForm: FormGroup = this.formBuilder.group({});
  solicitacao:Solicitacao = new Solicitacao();
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, 
    private _snackBar: MatSnackBar,
    private solicitacaoService: SolicitacaoService
  ) {}

  ngOnInit(): void {    
    this.solicitacaoForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      solicitante: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      descricaoProduto: this.formBuilder.control('',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      valorProduto: this.formBuilder.control(undefined, [Validators.required, Validators.min(0.01)]),
      status:this.formBuilder.control(''),
      observacao:this.formBuilder.control(''),
    })

    let id = this.route.snapshot.params['id'];
    if (id) {
      this.solicitacaoService.findById(id)
        .subscribe(response => {
          this.solicitacaoForm.patchValue(response)
          this.solicitacao = response
          if (this.solicitacao.status !== 'Pendente') {
            this.snackbar('Não é permitido edição de solicitação', 'bg-danger');
            this.router.navigate(['/app/solicitacao'])
          }
        })
    }
  }

  solicitarItem(solicitacao:Solicitacao) {    
    this.save(solicitacao)
  }

  salvarItem(solicitacao:Solicitacao) {
    this.save(solicitacao)
    this.router.navigate(['/app/solicitacao'])
  }

  save(solicitacao:Solicitacao) {
    this.solicitacaoService
    .save(solicitacao)
    .subscribe(response => {
      this.solicitacaoForm.reset()
      this.snackbar("Solicitação salva com sucesso!", 'bg-primary');
    }, (err) => {
      this.snackbar(err.error.errors[0], 'bg-danger');
    })
  }

  snackbar(message:string, bg:string) {
    let c = new MatSnackBarConfig()
    c.duration = 3000;
    c.panelClass = bg;
    this._snackBar.open(message, undefined, c)
  }

}
