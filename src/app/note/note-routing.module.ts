import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NoteComponent } from "./note.component";

const notesRoutes : Routes = [
  {path: 'note', component: NoteComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(notesRoutes)
  ],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
