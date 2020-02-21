import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TareaModel } from '../shared/tarea.model';
import { Observable } from 'rxjs';

@Injectable(/*{providedIn: 'root'}*/)
export class TareaService {


  constructor(private http: HttpClient) { }

  getAllTareas() {
    return this.http.get<TareaModel[]>('http://localhost:3000/api/tareas');
  }

  getTarea(id: string) {
    return this.http.get<TareaModel>('http://localhost:3000/api/tareas/' + id);
  }

  addTarea(tarea: TareaModel) {
    return this.http.post<TareaModel>('http://localhost:3000/api/tareas',
    { titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado });
  }

  updateTarea(tarea: TareaModel) {
    return this.http.put<TareaModel>('http://localhost:3000/api/tareas' + tarea._id,
    { titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado});
  }

  deleteTarea(id: string) {
    return this.http.delete<string>('http://localhost:3000/api/tareas/' + id);
  }

}
