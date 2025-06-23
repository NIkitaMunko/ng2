import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    });

    return this.http.get('http://localhost:3000/cars', {headers: headers})
      .pipe(
        map((response: any) => response)
      );
  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    });

    return this.http.post('http://localhost:3000/cars', data, {headers: headers})
      .pipe(
        map((response: any) => response)
      )
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
      .pipe(
      map((response: any) => response.json())
      )
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }

  getAppTitle() {
    return this.http.get<{ value: string }>('http://localhost:3000/title')
      .pipe(
        map(response => response.value)
      );
  }
}
