import { Component, OnInit, ViewChild } from '@angular/core';
import { ContribuicoesService } from 'src/app/services/contribuicoes.service';
export type ChartOptions = {

};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit{
  
 contribuicoes: any[] = [];
  obj: any = { valor1: 0, valor2: 0 };

  constructor(private contribuicoesService: ContribuicoesService) {}

  ngOnInit(): void {
  this.contribuicoesService.getContribuicoes().subscribe(data => {
    this.contribuicoes = data.contribuicoes;

    const total = data.obj.valor1 + data.obj.valor2;

    this.obj = {
      valor1: (data.obj.valor1 / total) * 100,
      valor2: (data.obj.valor2 / total) * 100,
      valor1Real: data.obj.valor1,
      valor2Real: data.obj.valor2
    };
  });
}

}
