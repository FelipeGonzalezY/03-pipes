import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, noMostrar: boolean = true): any {
    let salida = "";
    if(noMostrar){
      for (let i = 0; i < value.length; i++) {
        salida = salida + '*';
      }
    }
    else {
      salida = value;
    }
    return salida;
  }

}
