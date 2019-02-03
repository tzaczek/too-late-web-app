import { Component, OnInit } from '@angular/core';

import { Goal } from './goal';

@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.css']
})
export class GoalItemComponent implements OnInit {

  goal : Goal;

  constructor() { }

  ngOnInit() {
    this.goal = new Goal();
    this.goal.name = "My first goal";
    this.goal.description = "This is very important goal that needs to be completed prior to job interview"
  }

}
