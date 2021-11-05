import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './plantillas/home/home.component';
import { LibrosComponent } from './plantillas/libros/libros.component';
import { CrearComponent } from './plantillas/libros/crear/crear.component';



const routes: Routes = [
  //Home
  { path: '', component: HomeComponent},

  { path: 'libros', component: LibrosComponent},

  { path: 'new', component: CrearComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
