import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyResumeComponent } from './biography-resume.component';

describe('BiographyResumeComponent', () => {
  let component: BiographyResumeComponent;
  let fixture: ComponentFixture<BiographyResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiographyResumeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographyResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
