import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TareaModel } from '../shared/tarea.model';
import { Observable } from 'rxjs';

@Injectable(/*{providedIn: 'root'}*/)
export class TareaService {

  tareas: TareaModel[] = [];

  constructor(private http: HttpClient) { }

  getAllTareas(): Observable<any> {
    return this.http.get('http://localhost:3000/api/tareas');
  }

  getTarea(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/api/tareas/' + id);
  }

  addTarea(tarea: TareaModel): Observable<any> {
    let params = JSON.stringify(tarea);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/tareas/', params, { headers });
  }

  updateTarea(tarea: TareaModel): Observable<any> {
    return this.http.put('http://localhost:3000/api/tareas/' + tarea._id,
    { titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado});
  }

  deleteTarea(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/api/tareas/' + id);
  }

}
