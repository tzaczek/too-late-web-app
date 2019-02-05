import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { GoalItemComponent } from './goal-item/goal-item.component';
import { LibraryModule } from '../library/library.module'

@NgModule({
  declarations: [
    GoalItemComponent
  ],
  imports: [
    CommonModule,
    GoalRoutingModule,
    LibraryModule
  ]
})
export class GoalModule { }
