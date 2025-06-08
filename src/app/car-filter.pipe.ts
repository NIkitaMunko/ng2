import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList: any[], searchString: string = '', fieldName: string = 'name'): any[] {
    if (!carList || !searchString.trim()) return carList;

    return carList.filter((car: any) =>
      car[fieldName]?.toLowerCase().includes(searchString.toLowerCase())
    );
  }

}
