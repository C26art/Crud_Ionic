import { Component } from '@angular/core';

import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 clientes!: Cliente[];
 isModalOpen = false;

  constructor(private service: ClienteService) {}

  public ionViewWillEnter(): void {
    this.listaClientes();

  }

  listaClientes() {
    this.service.getClientes().subscribe({
      next:(result) => this.clientes = result,
      error:(err) => console.error(err),
    });
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
