import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebTrekComponent } from './feb-trek.component';

describe('FebTrekComponent', () => {
  let component: FebTrekComponent;
  let fixture: ComponentFixture<FebTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FebTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FebTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
