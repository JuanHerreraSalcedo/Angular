import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html'
})
export class ListadoTareasComponent {

  // tareas=[]; 

  constructor( private tareasService: TareasService){
    // console.log(tareasService.tareas)
  }

  get tareas(){
    return this.tareasService.tareas
  }
  
  delete(tarea: Tarea){
    this.tareasService.deleteTarea(tarea.tarea);
  }

  complete(tarea: Tarea){
    this.tareasService.completeTarea(tarea.tarea);
  }
}
