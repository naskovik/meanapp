import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { TareaModel, TareaEstadosSelect, TareaEstados } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css'],
  providers: [TareaService]
})
export class NewTareaComponent implements OnInit {

  public tarea: TareaModel;
  public tareaEstadosSelect = ['Por hacer', 'En curso', 'Hecha'];
  public status: string;
  public fecha: Date;
  public estado: string;
  public titulo: string;

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.tareaEstadosSelect = TareaEstadosSelect;
    // New empty tarea
    this.tarea = new TareaModel(null, '', new Date(), 'Por hacer');
  }

  onSubmit() {

    // Asign form parameters to this.tarea
    this.tarea.fecha = this.fecha;
    this.tarea.estado = this.estado;
    this.tarea.titulo = this.titulo;

    // Call method to post item on DB
    this.tareaService.addTarea(this.tarea)
    .subscribe(
      response => {
        console.log(response);
        if ( response.status === 'success' ) {
          this.status = 'success';
          // Log created tarea (for debugging)
          console.log(response.tarea);
          // Navigate to main page
          this.router.navigate(['tareas/']);
        } else {
          this.status = 'error';
        }
        console.log(this.status);
        },
        error => console.log(error)
      );
  }

}
