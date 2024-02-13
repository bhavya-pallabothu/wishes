import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateselectionComponent } from './dateselection.component';

describe('DateselectionComponent', () => {
  let component: DateselectionComponent;
  let fixture: ComponentFixture<DateselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
