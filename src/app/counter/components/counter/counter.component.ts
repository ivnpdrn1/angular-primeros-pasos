import { Component, OnInit } from '@angular/core';



@Component({
  selector:'app-counter',
  template:
  `
<h1>Esto viene del counter.component.ts**</h1>

  <h3>Counter**: {{counter}}</h3>



  <button (click)="increaseBy(+1)">+1**</button>,
  <button (click)="resetCounter()">Reset**</button>.
  <button (click)="increaseBy(-1)">-1**</button>,

  <h1>solo el contador de counter.component.ts esta trabajando</h1>

  `
})

// incluyendo HTML en el archivo de Typescript


export class CounterComponent  {
  public counter: number = 10;

  increaseBy(value:number):void {
    this.counter = this.counter + value; // this.counter = this.counter + 1;
  }

  resetCounter():void {
    this.counter = 10;
  }

}




// usando el Angular Snippets by John Papa
// este se inicia con
// a-
// entonces aparecen las opciones
// y se escogio:
// a-component
// y se presiona TAB



