import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanuaryTrekComponent } from './january-trek.component';

describe('JanuaryTrekComponent', () => {
  let component: JanuaryTrekComponent;
  let fixture: ComponentFixture<JanuaryTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanuaryTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanuaryTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
