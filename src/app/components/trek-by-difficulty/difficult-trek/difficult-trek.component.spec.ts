import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultTrekComponent } from './difficult-trek.component';

describe('DifficultTrekComponent', () => {
  let component: DifficultTrekComponent;
  let fixture: ComponentFixture<DifficultTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifficultTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
