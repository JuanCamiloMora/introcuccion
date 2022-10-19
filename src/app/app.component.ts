import { Component } from '@angular/core';
import { posts } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introcuccion';
  nombre = "juan camilo mora";
  articulos = posts;
  
}
