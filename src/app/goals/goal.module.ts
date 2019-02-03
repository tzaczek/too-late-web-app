import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { GoalItemComponent } from './goal-item/goal-item.component';
import { GoalLibraryComponent } from './goal-library/goal-library.component';

@NgModule({
  declarations: [
    GoalItemComponent,
    GoalLibraryComponent
  ],
  imports: [
    CommonModule,
    GoalRoutingModule
  ]
})
export class GoalModule { }
