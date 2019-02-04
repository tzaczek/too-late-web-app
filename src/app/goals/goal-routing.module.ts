import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GoalItemComponent } from "./goal-item/goal-item.component";

const goalsRoutes : Routes = [
  {path: 'goal/:id', component: GoalItemComponent}
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
