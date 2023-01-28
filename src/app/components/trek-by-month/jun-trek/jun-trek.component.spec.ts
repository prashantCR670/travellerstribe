import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunTrekComponent } from './jun-trek.component';

describe('JunTrekComponent', () => {
  let component: JunTrekComponent;
  let fixture: ComponentFixture<JunTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
