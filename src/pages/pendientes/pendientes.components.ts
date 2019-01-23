import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.components';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.components.html'
})
export class PendientesComponent {
    
    listas: Lista[];

    constructor(public deseoService : DeseosService,
        private navCtrl: NavController,
        private alertCtrl: AlertController) {
        this.listas = deseoService.getListas();
    }

    itemSelected(indice: number) {
        console.log('El indice es: ' + indice);
        this.navCtrl.push(AgregarComponent, {'indice': indice});
    }

    agregar() {
       // this.navCtrl.push(AgregarComponent);

       const prompt = this.alertCtrl.create({
        title: 'Nueva lista',
        message: "Nombre de la nueva lista",
        inputs: [
          {
            name: 'titulo',
            placeholder: 'Nombre lista'
          },
        ],
        buttons: [{
            text: 'Cancelar'
        },{
            text: 'Guardar',
            handler: data => {
                console.log(data);
                this.navCtrl.push(AgregarComponent, {'titulo': data.titulo});
            }
        }]
      });
      prompt.present();
    }

    quitar(id: number) {
        console.log('El ID es: ' + id);
        this.deseoService.quitarLista(id);
        this.listas = this.deseoService.getListas();
    }


}
