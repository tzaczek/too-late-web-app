import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, last } from 'rxjs/operators';

import { Goal } from './goal-item/goal';
import { GOALS } from './mock-goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService{

  private goals$ : BehaviorSubject<Goal[]> = new BehaviorSubject(GOALS);

  constructor() { }

  getGoals() : Observable<Goal[]>{
    return this.goals$;
  }

  getGoal(id: number | string){
    return this.getGoals().pipe(
      map((goals : Goal[]) => goals.find(goal => goal.id === +id))
    );
  }

  addGoal(name : string){
   // let lastGoalId : number = Math.max.apply(Math, GOALS.map(goal => goal.id));
   let lastGoalId : number = (GOALS.reduce((prev, current) => prev.id > current.id ? prev : current)).id;
    
    let goal : Goal = {
      name: name,
      id: ++lastGoalId,
      description: ''
    };

    GOALS.push(goal);
    this.goals$.next(GOALS);
  }

  deleteGoal(id : number | string){
    GOALS.splice(GOALS.findIndex(goal => goal.id === +id), 1);
    this.goals$.next(GOALS);
  }
}