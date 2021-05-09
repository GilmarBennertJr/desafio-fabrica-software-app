import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  routeUrl:string = ''
  menus:any[] = [
    { url: '/app/solicitacao', label: 'Solicitar Material' },
    { url: '/app/amox/solicitacoes', label: 'Almoxarife' },
    { url: '/app/adm/solicitacoes', label: 'Administrativo' }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeUrl = this.router.url
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routeUrl = val.url
      }
    })
  }

}
