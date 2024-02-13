import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeddyDialogComponent } from './teddy-dialog.component';

describe('TeddyDialogComponent', () => {
  let component: TeddyDialogComponent;
  let fixture: ComponentFixture<TeddyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeddyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeddyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
