import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector:'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];

  }

  onDeleteCharacter (id: string) :void {
    this.dbzService.deleteCharacterById( id )

    // cuando se elimina un personaje, voy a eliminar ese personaje por el id del character

  }

  onNewCharacter (  character: Character) {
    this.dbzService.addCharacter( character );


}

}

// estoy exportando "characters" cuando exporto la class MainPageComponent
// este "characters" esta siendo enviado a  "characterList" por main-page.component.html a
// list.component.ts que lo espera con un decorator @Input


// nosotros no vamos a colocar nuestros Servicios Publicos (constructor)
// Servicio en Private es considerado en buenas practicas

// los GET deben regresar un valor

// se coloca ... para crear una copia de cada personaje que se tiene alli










