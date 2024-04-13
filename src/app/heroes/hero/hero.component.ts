import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


// getter es un metodo pero que se usa como una propiedad

  get capitalizeName(): string {
    return this.name.toUpperCase();
    //return 'Hola Mundo'.toUpperCase();
    // this. se ve como una propiedad, en este caso en un metodo
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = this.age + 10;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    //*
    //document.querySelectorAll('h1')!.forEach( element => {
      //element.innerHTML = '<h1>Desde Angular</h1>';
    //})
    //*

    //document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';

  }
}

//metodos tengo que invocarlos con parentesis***


// esta es una simple clase que tiene un decorador
// ese decorador, @Component define: el selector, el templateUrl,
// y el estilo: styleUrls

//nuestras clases tienen el control absoluto
// quienes exponen la informacion al mundo exterior a traves del HTML

//si colocamos "private" solo se puede usar en la clase que lo contiene


