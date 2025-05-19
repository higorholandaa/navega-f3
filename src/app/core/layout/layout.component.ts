import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LayoutComponent {
  isSidenavOpened: boolean = true;

  menuItems = [
    { title: 'Ver Extrato', icon: 'assets/img/icons/extrato.png', route: '/extrato' },
    { title: 'Contribuição Extra', icon: 'assets/img/icons/contribuicao-extra.png', route: '/contribuicao-extra' },
    { title: 'Documentos', icon: 'assets/img/icons/documentos.png', route: '/documentos' },
    { title: 'Regime de Tributação', icon: 'assets/img/icons/regime.png', route: '/tributacao' },
    { title: 'Solicitar Benefício', icon: 'assets/img/icons/beneficio.png', route: '/solicitar-beneficio' },
    { title: 'Extrato Regressivo', icon: 'assets/img/icons/extrato.png', route: '/extrato-regressivo' },
    { title: 'Informações', icon: 'assets/img/icons/informacoes.png', route: '/informacoes' }
  ];

  constructor() {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    if (window.innerWidth <= 768) {
      this.isSidenavOpened = false; 
    } else {
      this.isSidenavOpened = true;
    }
  }
}
