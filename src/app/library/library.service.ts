import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { LIBRARIAS } from './mock-library';
import { Library } from './libray-item/library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }

  getLibrarias(): Observable<Library[]>{
    return of(LIBRARIAS);
  }

  getGoalLibray(goalId: number | string){
    return this.getLibrarias().pipe(
      map((libs : Library[]) => libs.find(lib => lib.goalId === +goalId))
    );
  }
}
