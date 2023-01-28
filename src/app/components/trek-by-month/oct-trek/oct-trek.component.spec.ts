import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctTrekComponent } from './oct-trek.component';

describe('OctTrekComponent', () => {
  let component: OctTrekComponent;
  let fixture: ComponentFixture<OctTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
