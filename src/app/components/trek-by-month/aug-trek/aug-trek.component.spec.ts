import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugTrekComponent } from './aug-trek.component';

describe('AugTrekComponent', () => {
  let component: AugTrekComponent;
  let fixture: ComponentFixture<AugTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
