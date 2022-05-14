import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job } from '@models/job.model';

import { JobCardComponent } from './job-card.component';

const job: Job = {
  image: {
    imageUrl: '',
    size: '',
    resolution: '',
    md5: '',
  },
  nameBusinness: '',
  color: '',
  description: '',
  active: false,
  role: '',
  from: '',
  to: '',
  function1: '',
  function2: '',
  function3: '',
  function4: '',
};

describe('JobCardComponent', () => {
  let component: JobCardComponent;
  let fixture: ComponentFixture<JobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When is admin', () => {
    component.admin = true;
    component.job = job;

    expect(component.activate).toBe(true);
  });

  it("When you aren't admin", () => {
    component.admin = false;
    component.job = job;

    expect(component.activate).toBe(false);
  });
});
