import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Goal } from '../goal-item/goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  goals$ : Observable<Goal[]>;

  constructor(private goalService : GoalService) { }

  ngOnInit() {
    this.goals$ = this.goalService.getGoals();
  }

  addGoal(name: string){
    this.goalService.addGoal(name);
  }

  deleteGoal(id: number | string){
    this.goalService.deleteGoal(id);
  }
}
