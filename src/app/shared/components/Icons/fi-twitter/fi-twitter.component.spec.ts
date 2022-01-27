import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiTwitterComponent } from './fi-twitter.component';

describe('FiTwitterComponent', () => {
  let component: FiTwitterComponent;
  let fixture: ComponentFixture<FiTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
