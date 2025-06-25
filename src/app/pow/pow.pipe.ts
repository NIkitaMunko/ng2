import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pow',
})
export class PowPipe implements PipeTransform {
  transform(number: number, pow: number = 1): number {
    return Math.pow(number, pow);
  }
}
