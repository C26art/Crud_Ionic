import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalClientDetailsComponent } from './modal-client-details.component';



@NgModule({
  declarations: [ModalClientDetailsComponent],
  imports: [ CommonModule, IonicModule ],
  exports: [ModalClientDetailsComponent]
})
export class ModalClientDetailsModule { }
