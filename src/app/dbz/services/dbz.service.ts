import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters: Character [] = [{
    id: uuid(),
    name: 'Krillin (f. main-ts)',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku (f. main-ts)',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta (f. main-ts)',
    power: 7500
  }];

addCharacter( character: Character ): void {

  const newCharacter: Character = {id: uuid(), ...character};


  this.characters.push(newCharacter);
  console.log('MainPage');
  console.log(character)

}

// onDeleteCharacter (index:number) {
//  this.characters.splice (index,1);

deleteCharacterById(id:string) {

  this.characters = this.characters.filter(character => character.id!== id);
}


}






// Angular le va a decir al compilador
// que es un Servicio
// el providerIn hace que no sea necesaio
// que se le incluya en providers: [ ]
// en el app.module.ts

// provideIn hace un Singleton en toda la aplicacion
// mediante injection de dependencias

// tecnicamente en JavaScript los objetos pasan por referencia
// significa que cualquier modificacion que suceda a un objeto
// literalmente lo va a modificar aca
// y eso es en ocasiones lo que no se quiere
// luego se dira como romper con esa refeferencia

// ... permite esparcir todas las propiedades no importando su numero
// y si tuvieramos un id ese sera el id el que usemos






