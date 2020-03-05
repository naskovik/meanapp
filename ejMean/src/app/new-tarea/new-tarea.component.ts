import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { TareaModel, TareaEstadosSelect } from '../shared/tarea.model';
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
  public tareaEstados = [];
  public status: string;

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tareaEstados = TareaEstadosSelect;

    this.tarea = new TareaModel(null, '', new Date(), 'Por hacer');
  }

  onSubmit() {
    this.tareaService.addTarea(this.tarea)
    .subscribe(
      response => {
        console.log(response);
        if ( response.status === 'success' ) {
          this.status = 'success';
          this.tarea = response.tarea;
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
