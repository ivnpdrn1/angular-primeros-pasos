
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent} from './components/add-character/add-character.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],

  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class DbzModule { }


// *** descripcion de este modulo ***
// se importan todos los componentes asociados aguas abajo de este modulo
//se declaran todos los componentes asociados aguas abajo de este modulo, dentro del decorador/class @NgModule
// despues de haber sido importados.
// se exporta el componente Padre NO los hijos
// se exporta este modulo como una Class
