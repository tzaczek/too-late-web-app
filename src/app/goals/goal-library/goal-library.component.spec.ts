import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalLibraryComponent } from './goal-library.component';

describe('GoalLibraryComponent', () => {
  let component: GoalLibraryComponent;
  let fixture: ComponentFixture<GoalLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
