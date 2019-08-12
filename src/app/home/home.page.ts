import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ruta:Router) {}


  async ir_login(){
    await this.ruta.navigate(['/login'])
  }

  async ir_registro(){
    await this.ruta.navigate(['/registro'])
  }
}
