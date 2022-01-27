import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsSunComponent } from './bs-sun.component';

describe('BsSunComponent', () => {
  let component: BsSunComponent;
  let fixture: ComponentFixture<BsSunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsSunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsSunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
