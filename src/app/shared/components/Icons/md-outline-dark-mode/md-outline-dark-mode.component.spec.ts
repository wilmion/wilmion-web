import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdOutlineDarkModeComponent } from './md-outline-dark-mode.component';

describe('MdOutlineDarkModeComponent', () => {
  let component: MdOutlineDarkModeComponent;
  let fixture: ComponentFixture<MdOutlineDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdOutlineDarkModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdOutlineDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
