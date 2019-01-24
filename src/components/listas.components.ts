import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from '../models/lista.model';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarComponent } from '../pages/agregar/agregar.components';

@Component({
    selector: 'components-listas',
    templateUrl: 'listas.components.html'
})
export class ListasComponent {

    listas: Lista[];

    @Input()
    terminada: boolean = false;

    constructor(public deseoService : DeseosService, 
                private navCtrl: NavController,
                private alertCtrl: AlertController) {
        this.listas = deseoService.getListas();
    }
 

    quitar(id: number) {
        console.log('El ID es: ' + id);
        this.deseoService.quitarLista(id);
        this.listas = this.deseoService.getListas();
    }

    itemSelected(lista: Lista) {
        this.navCtrl.push(AgregarComponent, {'id': lista.id});
    }

    editarLista(lista: Lista, slidingItem: ItemSliding) {
        slidingItem.close();
        const prompt = this.alertCtrl.create({
           
            title: 'Editar lista',
            message: "Nombre de lista",
            inputs: [
              {
                name: 'titulo',
                placeholder: 'Nombre lista',
                value: lista.titulo
              },
            ],
            buttons: [{
                text: 'Cancelar'
            },{
                text: 'Guardar',
                handler: data => {
                    console.log(data);
                    lista.titulo = data.titulo;
                    this.deseoService.persistirListas;
                }
            }]
          });
          prompt.present();
    }


}
