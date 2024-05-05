import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})


export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();



onDeleteCharacter(id?:string): void {
  // TODO: Emitir el ID del personaje

  if(!id) return;

  console.log({id})

  this.onDelete.emit(id);


}



}


// con solo poner el decorador @Input
// sobre una property
// en este caso "characterList" que tiene un Type Character[] en este caso
// si no enviamos nada, el valor por defecto sera name:'Trunks', power: 10
//
// en este caso esta recibiendo informacion del componente PADRE: main-page.component.ts
// a traves del parametro "characterList"
// que esta en el main-page.component.html relacionado con "characters" del componente PADRE
// entonces es a traves de main-page.component.html donde se conectan PADRE e HIJO a traves del Selector que identifica al Componente HIJO
