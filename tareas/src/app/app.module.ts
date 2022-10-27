import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoTareasComponent } from './tareas/listado-tareas/listado-tareas.component';
import { SubtituloComponent } from './tareas/subtitulo/subtitulo.component';
import { TareasModule } from './tareas/tareas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TareasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
