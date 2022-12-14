import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalClientDetailsComponent } from '../modal-client-details/modal-client-details.component';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 clientes!: Cliente[];


  constructor(private service: ClienteService, private modalCtrl: ModalController) {}

  public ionViewWillEnter(): void {
    this.listaClientes();
  }

  listaClientes() {
    this.service.getClientes().subscribe({
      next:(result) => this.clientes = result,
      error:(err) => console.error(err),
    });
  }

  async openModal(id:number) {
    const cliente = this.clientes.find(cliente => cliente.id === id);
    console.log(cliente);

    const modal = await this.modalCtrl.create({
      component: ModalClientDetailsComponent,
      componentProps: {
        'cliente': cliente
      }
    });

    modal.onWillDismiss().then (
      event => {
        if(event.role === 'cancel') {
          this.listaClientes();
        }
      }
    );
    return await modal.present();
  }
}
