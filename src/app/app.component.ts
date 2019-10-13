import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = "Mariana";
  nombre2 = 'Mariana Cezarino DE LIMA'
  arreglo = [ 0,1,2,3,4,5,6,7,8,9];
  pi = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave:'Wolverine',
    edad:'438',
    direccion: {
      calle:'El bosque',
      casa:'36'
    }
  };
  activar = true;
  video = 'JISQMhtXiSM';
  video2 = "https://www.youtube.com/embed/JISQMhtXiSM";

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {resolve('Llegó la data!')},5000)
  });

  fecha = new Date();
}
