import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecTrekComponent } from './dec-trek.component';

describe('DecTrekComponent', () => {
  let component: DecTrekComponent;
  let fixture: ComponentFixture<DecTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
