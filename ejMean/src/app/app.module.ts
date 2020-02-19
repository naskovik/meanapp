import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';

const appRoutes: Routes = [
  { path: 'tareas', component: TareaListaComponent},
  { path: 'tareas/:id/edit', component: EditTareaComponent},
  { path: 'tareas/new', component: EditTareaComponent },
  { path: '*', redirectTo: '/tareas', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TareaListaComponent,
    EditTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
