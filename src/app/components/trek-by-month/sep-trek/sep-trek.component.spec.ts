import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepTrekComponent } from './sep-trek.component';

describe('SepTrekComponent', () => {
  let component: SepTrekComponent;
  let fixture: ComponentFixture<SepTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SepTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
