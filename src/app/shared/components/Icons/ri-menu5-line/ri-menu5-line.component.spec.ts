import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiMenu5LineComponent } from './ri-menu5-line.component';

describe('RiMenu5LineComponent', () => {
  let component: RiMenu5LineComponent;
  let fixture: ComponentFixture<RiMenu5LineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiMenu5LineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiMenu5LineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
