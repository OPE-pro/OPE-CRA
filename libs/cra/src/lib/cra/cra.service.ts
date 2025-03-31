import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CraService {


  addDayWorked(day: number): number {
    return day + 1;
  }

}
