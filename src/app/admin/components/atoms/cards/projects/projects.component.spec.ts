import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCardManageComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsCardManageComponent;
  let fixture: ComponentFixture<ProjectsCardManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsCardManageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCardManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
