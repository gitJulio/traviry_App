import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
     path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // { path: 'login', loadChildren: './paginas/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './paginas/registro/registro.module#RegistroPageModule' },
  { path: 'muro', loadChildren: './paginas/muro/muro.module#MuroPageModule' },
  { path: 'login', loadChildren: './paginas/usuario-login/usuario-login.module#UsuarioLoginPageModule' },
  { path: 'perfil', loadChildren: './paginas/perfil/perfil.module#PerfilPageModule' },  { path: 'crear-itinerario', loadChildren: './paginas/crear-itinerario/crear-itinerario.module#CrearItinerarioPageModule' },
  { path: 'chat', loadChildren: './paginas/chat/chat.module#ChatPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
