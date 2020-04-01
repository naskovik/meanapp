import { Component, OnInit } from '@angular/core';
import { TareaModel } from '../shared/tarea.model';
import { Observable } from 'rxjs';
import { TareaService } from '../shared/tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css'],
  providers: [TareaService]
})
export class TareaListaComponent implements OnInit {

  public tareas: TareaModel[];

  constructor(private tareaService: TareaService, private router: Router) { }

  ngOnInit() {

    this.tareaService.getAllTareas().subscribe(
      response => {
        if (response.tareas) { this.tareas = response.tareas; }
      },
      error => { console.log(error); }
    );
  }

  deleteTarea(id: string) {
    this.tareaService.deleteTarea(id)
    .subscribe(
      response => {
        console.log(response);
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );
  }

}
