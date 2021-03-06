import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}
  title = 'My Task Manager';

  navigateButton = true;

  navigate(){
    this.router.navigate(['tareas/']);
    this.navigateButton = !this.navigateButton;
  }
}
