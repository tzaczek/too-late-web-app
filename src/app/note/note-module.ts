import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './note-routing.module';
import { NoteComponent } from './note.component';

@NgModule({
  declarations: [
    NoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NoteModule { }
