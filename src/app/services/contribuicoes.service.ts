import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContribuicoesService {

  constructor() {}

  getContribuicoes(): Observable<any> {
    const contribuicoes = [
      {
        tipo: 'Contribuição Mensal',
        valor: 500,
        porcentagem: '5%',
        exibirPorcentagem: true
      },
      {
        tipo: 'Contribuição obrigatória',
        valor: 300,
        porcentagem: null,
        exibirPorcentagem: false
      }
    ];

    const obj = {
      valor1: 700,
      valor2: 300
    };

    return of({ contribuicoes, obj });
  }
}
