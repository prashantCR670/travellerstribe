import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchTrekComponent } from './march-trek.component';

describe('MarchTrekComponent', () => {
  let component: MarchTrekComponent;
  let fixture: ComponentFixture<MarchTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarchTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
