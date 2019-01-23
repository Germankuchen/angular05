import { Injectable } from "@angular/core";
import { Lista } from '../models/lista.model';

@Injectable()
export class DeseosService{

    listas: Lista[] = [];

    constructor() {
     /*   const LISTA1 = new Lista('Jugadores');
        const LISTA2 = new Lista('Actores');
        this.listas.push(LISTA1,LISTA2);

        console.log(this.listas);*/
        this.obtenerListas();
    }

    getListas(): Lista[] {
        return this.listas;
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.persistirListas();
    }

    quitarLista(id: number) {
        this.listas = this.listas.filter(data => {
            return data.id != id;
        })
        this.persistirListas();
    }

    persistirListas() {
        localStorage.setItem('data', JSON.stringify(this.listas));    
    }

    obtenerListas() {
        let storage = localStorage.getItem('data');
        if (storage != null)
            this.listas = JSON.parse(storage);
    }

}