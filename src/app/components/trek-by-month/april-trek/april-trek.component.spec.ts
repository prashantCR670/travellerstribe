import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprilTrekComponent } from './april-trek.component';

describe('AprilTrekComponent', () => {
  let component: AprilTrekComponent;
  let fixture: ComponentFixture<AprilTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprilTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprilTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
