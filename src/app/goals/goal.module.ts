import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { LibraryModule } from '../library/library.module'
import { GoalItemComponent } from './goal-item/goal-item.component';
import { GoalListComponent } from './goal-list/goal-list.component';


@NgModule({
  declarations: [
    GoalItemComponent,
    GoalListComponent
  ],
  imports: [
    CommonModule,
    GoalRoutingModule,
    LibraryModule
  ]
})
export class GoalModule { }
