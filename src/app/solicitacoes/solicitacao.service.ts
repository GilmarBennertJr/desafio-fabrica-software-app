import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Solicitacao } from './solicitacao.model';
import { Filter } from './filter.model';

import { SERVICE_API } from '../app.api'

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  constructor(private http: HttpClient) { }

  save(solicitacao:Solicitacao): Observable<Solicitacao> {
    return this.http.post<Solicitacao>(SERVICE_API, solicitacao)
  }

  findAll(filter:Filter): Observable<any> {
    return this.http.get<Solicitacao[]>(
        `${SERVICE_API}?${filter.getQuery()}`
    )
  }
  
  findById(id:number): Observable<Solicitacao> {
      return this.http.get<Solicitacao>(`${SERVICE_API}/${id}`)
  }

}