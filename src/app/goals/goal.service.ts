import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Goal } from './goal-item/goal';
import { GOALS } from './mock-goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService{

  constructor() { }

  getGoals() : Observable<Goal[]>{
    return of(GOALS);
  }

  getGoal(id: number | string){
    return this.getGoals().pipe(
      map((goals : Goal[]) => goals.find(goal => goal.id === +id))
    );
  }
}