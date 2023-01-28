import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratetrekComponent } from './moderatetrek.component';

describe('ModeratetrekComponent', () => {
  let component: ModeratetrekComponent;
  let fixture: ComponentFixture<ModeratetrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratetrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratetrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
