import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../servicios/login/login.service' 
import { AlertController,LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.page.html',
  styleUrls: ['./usuario-login.page.scss'],
})
export class UsuarioLoginPage implements OnInit {

  correo:any;
  password:any;
  user:any;
  constructor(
              public ruta:Router, 
              public lg:LoginService,
              public alertController: AlertController,
              public loadingController: LoadingController,
              private storage: Storage
  ) { }

  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña invalido',
      buttons: ['OK']
    });

    await alert.present();
  }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Iniciando'
    });
    await loading.present();

    let user:any=await this.lg.login(this.correo,this.password)
    if(user==null){
      this.presentAlert()
    }else{
      this.storage.set("id_usuario",user.id_usuario)
      await this.ruta.navigate(['/muro'])
    }
    await loading.dismiss();
  }


}
