import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GoalItemComponent } from "./goal-item/goal-item.component";
import { GoalListComponent } from './goal-list/goal-list.component';

const goalsRoutes : Routes = [
  { path: 'goal/:id', component: GoalItemComponent },
  { path: 'goallist', component: GoalListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(goalsRoutes)
  ],
  exports: [RouterModule]
})
export class GoalRoutingModule { }
