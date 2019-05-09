import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoalModule } from './goals/goal.module';
import { NoteModule } from './note/note-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoalModule,
    NoteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
