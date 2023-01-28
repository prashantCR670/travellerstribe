import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovTrekComponent } from './nov-trek.component';

describe('NovTrekComponent', () => {
  let component: NovTrekComponent;
  let fixture: ComponentFixture<NovTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
