import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
// import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TimelineItinerarioComponent } from './timeline-itinerario/timeline-itinerario.component';
// 
// import { NoimgPipe } from '../Pipes/noimg.pipe';
@NgModule({
  declarations: [
    // SideMenuComponent,
    HeaderComponent,
    TimelineItinerarioComponent
    // NoimgPipe,
    // MenuCarruselComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    TimelineItinerarioComponent
  ]
})
export class ComponentsModule { }