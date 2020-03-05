import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { TareaModel, TareaEstadosSelect } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent implements OnInit {
  public tarea: TareaModel;
  public tareaEstadosSelect = [];
  public status: string;

  constructor(private route: ActivatedRoute, private router: Router, private tareaService: TareaService) { }

  ngOnInit() {
    this.tareaEstadosSelect = TareaEstadosSelect;
    // get id from url
    this.route.paramMap.subscribe( (params: ParamMap) => {
      let id = params.get('id');
      this.tareaService.getTarea(id).subscribe(
        response => {
          if (response.tarea) this.tarea = response.tarea;
          else this.router.navigate(['/tareas']);
        }, error => {
          this.router.navigate(['/tareas']);
          console.log(error);
        }
      );
    });
  }

  onSubmit() {
    this.tareaService.updateTarea(this.tarea)
      .subscribe( response => {

        console.log(response);
        this.router.navigate(['/tareas']);
      },
      error => console.log(error));
  }



}
