import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsInstagramComponent } from './bs-instagram.component';

describe('BsInstagramComponent', () => {
  let component: BsInstagramComponent;
  let fixture: ComponentFixture<BsInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsInstagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
