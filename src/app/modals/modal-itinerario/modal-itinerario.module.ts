import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalItinerarioPage } from './modal-itinerario.page';

const routes: Routes = [
  {
    path: '',
    component: ModalItinerarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalItinerarioPage]
})
export class ModalItinerarioPageModule {}
