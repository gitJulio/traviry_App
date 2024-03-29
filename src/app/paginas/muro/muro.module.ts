import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../componentes/components.module';
import { IonicModule } from '@ionic/angular';

import { MuroPage } from './muro.page';

const routes: Routes = [
  {
    path: '',
    component: MuroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MuroPage]
})
export class MuroPageModule {}
