import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = 'Hola Universo desde app.component.ts que va al app.component.html';// este string va al HTML a traves de la variable "title"


}
