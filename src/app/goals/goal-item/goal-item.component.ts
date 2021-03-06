import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Goal } from './goal';
import { GoalService } from '../goal.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.css']
})
export class GoalItemComponent implements OnInit {

  goal$ : Observable<Goal>;

  constructor(private route: ActivatedRoute, private goalService : GoalService) { }

  ngOnInit() {
    this.goal$ = this.route.paramMap.pipe(
      switchMap((paramMap : ParamMap) => this.goalService.getGoal(paramMap.get('id'))));
  }
}
