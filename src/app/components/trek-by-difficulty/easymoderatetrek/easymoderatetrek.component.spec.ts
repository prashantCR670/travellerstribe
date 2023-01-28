import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasymoderatetrekComponent } from './easymoderatetrek.component';

describe('EasymoderatetrekComponent', () => {
  let component: EasymoderatetrekComponent;
  let fixture: ComponentFixture<EasymoderatetrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasymoderatetrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasymoderatetrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
