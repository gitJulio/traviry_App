import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.page.html',
  styleUrls: ['./usuario-login.page.scss'],
})
export class UsuarioLoginPage implements OnInit {

  constructor(
              public ruta:Router
  ) { }

  ngOnInit() {
  }

  login(){
      this.ruta.navigate(['/muro'])
  }
}
