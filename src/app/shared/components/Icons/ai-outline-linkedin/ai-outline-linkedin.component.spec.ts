import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiOutlineLinkedinComponent } from './ai-outline-linkedin.component';

describe('AiOutlineLinkedinComponent', () => {
  let component: AiOutlineLinkedinComponent;
  let fixture: ComponentFixture<AiOutlineLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiOutlineLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiOutlineLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
