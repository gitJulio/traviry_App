import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewItinerarioPage } from './view-itinerario.page';

const routes: Routes = [
  {
    path: '',
    component: ViewItinerarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewItinerarioPage]
})
export class ViewItinerarioPageModule {}
