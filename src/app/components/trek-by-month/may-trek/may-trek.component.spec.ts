import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayTrekComponent } from './may-trek.component';

describe('MayTrekComponent', () => {
  let component: MayTrekComponent;
  let fixture: ComponentFixture<MayTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
