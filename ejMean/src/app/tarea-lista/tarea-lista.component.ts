import { Component, OnInit } from '@angular/core';
import { TareaModel } from '../shared/tarea.model';
import { Observable } from 'rxjs';
import { TareaService } from '../shared/tarea.service';

@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css']
})
export class TareaListaComponent implements OnInit {

  tareas: Observable<TareaModel[]>;

  constructor(private tareaService: TareaService) { }

  ngOnInit() {

    this.tareas = this.tareaService.getAllTareas();
  }

  deleteTarea(id: string) {
    this.tareaService.deleteTarea(id)
    .subscribe(data => console.log(data), error => console.log(error));

    this.tareas = this.tareaService.getAllTareas();
  }

}
