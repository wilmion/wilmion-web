import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCardManageComponent } from './jobs.component';

describe('JobsComponent', () => {
  let component: JobsCardManageComponent;
  let fixture: ComponentFixture<JobsCardManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobsCardManageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsCardManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
