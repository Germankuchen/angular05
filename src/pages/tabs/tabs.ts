import { Component } from '@angular/core';

import { PendientesComponent } from '../pendientes/pendientes.components';
import { TerminadosComponent } from '../terminados/terminados.components';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;


  constructor() {

  }
}
