import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerateDifficultTrekComponent } from './moderate-difficult-trek.component';

describe('ModerateDifficultTrekComponent', () => {
  let component: ModerateDifficultTrekComponent;
  let fixture: ComponentFixture<ModerateDifficultTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerateDifficultTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerateDifficultTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
