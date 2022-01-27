import { Pipe, PipeTransform } from '@angular/core';
import { rutFormat } from 'rut-helpers';

@Pipe({
  name: 'rut',
})
export class RutPipe
  implements PipeTransform {
  transform(value: string): string {
    return rutFormat(value);
  }
}
