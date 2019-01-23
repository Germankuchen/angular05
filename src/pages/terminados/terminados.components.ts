import { Component } from '@angular/core';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.components.html'
})
export class TerminadosComponent {
    listas: Lista[];

    constructor(public deseoService : DeseosService) {
        this.listas = deseoService.getListas();
    }

    itemSelected(lista: Lista) {
        console.log(lista);
    }

}
