import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgModalComponent } from './dg-modal.component';

describe('DgModalComponent', () => {
  let component: DgModalComponent;
  let fixture: ComponentFixture<DgModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
