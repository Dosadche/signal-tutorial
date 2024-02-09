import { Injectable, Signal } from '@angular/core';
import { Observable, from } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

const VEHICLES = [
  { id: 1, name: 'First' , mileage: 1000, registrationNumber: 'BC7324PH', driver: 'Jimmy Rock'},
  { id: 2, name: 'Second', mileage: 2300, registrationNumber: 'KX3344QH', driver: 'Larry Wheels'},
  { id: 3, name: 'Third' , mileage: 1200, registrationNumber: 'AA4554RH', driver: 'Larry Brown'},
  { id: 4, name: 'Fourth', mileage: 3000, registrationNumber: 'AH1354BT', driver: 'Dmytro Osadchyi'},
];

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private getVehiclesPromise = new Promise<any[]>(((resolve) => {
    setTimeout(() => {
      resolve([
        {id: 1, name: 'First'}, 
        {id: 2, name: 'Second'}, 
        {id: 3, name: 'Third'}, 
        {id: 4, name: 'Fourth'},
      ]);
    }, 2000);
  }));
  private getVehicleByIdPromise = (id: number): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(VEHICLES.find((v) => v.id === id));
      }, 2000);
    });
  }
  
  getVehicleById = (id: number): Observable<any> => {
    return from(this.getVehicleByIdPromise(id));
  };

  getVehicles(): Signal<any[] | undefined> {
    return toSignal(from(this.getVehiclesPromise))
  };
}
