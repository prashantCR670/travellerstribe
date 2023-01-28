import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulTrekComponent } from './jul-trek.component';

describe('JulTrekComponent', () => {
  let component: JulTrekComponent;
  let fixture: ComponentFixture<JulTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JulTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JulTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
