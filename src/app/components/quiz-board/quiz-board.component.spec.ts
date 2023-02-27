import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBoardComponent } from './quiz-board.component';

describe('QuizBoardComponent', () => {
  let component: QuizBoardComponent;
  let fixture: ComponentFixture<QuizBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
