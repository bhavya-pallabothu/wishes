import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseDialogComponent } from './promise-dialog.component';

describe('PromiseDialogComponent', () => {
  let component: PromiseDialogComponent;
  let fixture: ComponentFixture<PromiseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
