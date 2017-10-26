import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let no = 'Genero no disponible';
    if(!value){
      return no;
    }
    return (value.length >0 ) ? value : no;
  }

}
