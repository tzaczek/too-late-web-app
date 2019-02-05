import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-libray-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.css']
})
export class LibraryItemComponent implements OnInit {

  @Input() goalId : number | string;

  constructor() { }

  ngOnInit() {
  }

}
