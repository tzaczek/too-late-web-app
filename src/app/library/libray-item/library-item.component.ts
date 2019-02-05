import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Library } from './library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-libray-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.css']
})
export class LibraryItemComponent implements OnInit {

  @Input() goalId : number | string;
  library$ : Observable<Library>;

  constructor(private libraryService : LibraryService) { }

  ngOnInit() {
    this.library$ = this.libraryService.getGoalLibray(this.goalId);
  }

}
