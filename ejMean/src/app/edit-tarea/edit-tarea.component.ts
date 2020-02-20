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
  tarea: TareaModel;
  tareaEstadosSelect = [];

  constructor(private route: ActivatedRoute, private router: Router, private tareaService: TareaService) { }

  ngOnInit() {
    this.tareaEstadosSelect = TareaEstadosSelect;

    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => {
        if (id) { return this.tareaService.getTarea(id); }
        else { return of(new TareaModel(null, '', new Date(), 'Por hacer')); }
      })
    )
    .subscribe( tarea => { this.tarea = tarea; console.log(tarea); },
    error => console.log(error));
  }

  onSubmit() {
    if (this.tarea._id) {
      this.tareaService.updateTarea(this.tarea)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['/tareas']); }, error => console.log(error));
    } else {
      this.tareaService.addTarea(this.tarea)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['tareas']); }, error => console.log(error));
    }
  }



}
