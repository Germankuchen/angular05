import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavParams, Item } from 'ionic-angular';
import { ListaItem } from '../../models/lista-item.model';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.components.html'
})
export class AgregarComponent {
    
    listas: Lista[];

    nombreItem: string = '';
    lista: Lista;
    item: ListaItem;

    constructor(public deseoService : DeseosService,
                private navParams: NavParams) {
        console.log('El indice es: ' + this.navParams.data.indice);            
        if (this.navParams.data.titulo)
        {
            this.lista = new Lista(this.navParams.data.titulo);
            deseoService.agregarLista(this.lista);
            deseoService.persistirListas();
        }         
        if (this.navParams.data.indice)   
        {
            this.listas = deseoService.getListas();
            this.lista = this.listas[this.navParams.data.indice];
        }
        
        
    }

    agregarItem(){
        console.log('Agregó' + this.nombreItem);
        this.item = new ListaItem(this.nombreItem);
        this.lista.items.push(this.item);
        this.deseoService.persistirListas();
    }

    quitar(indice: number) {
        this.lista.items.splice(indice, 1);
        this.deseoService.persistirListas();
    }

    seleccionarItem(item: ListaItem) {
        item.completado = !item.completado;
        this.lista.completada = false;
        this.lista.terminadaEn = null;
        const cantidaDeItems = this.lista.items.length;
        let completado = true;
        for (let itemNum = 0; itemNum < cantidaDeItems; itemNum++) {
            if (!this.lista.items[itemNum].completado) {
                completado = false;
            }
        }
        if (completado) {
            this.lista.completada = true;
            this.lista.terminadaEn = new Date();
            console.log('SE COMPLETO LA LISTA!!!');
        }    

        this.deseoService.persistirListas();
    }



}
