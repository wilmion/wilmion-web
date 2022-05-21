import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from '@core/models/project.model';
import { SharedModule } from '@shared/shared.module';

import { ProjectComponent } from './project.component';

const exampleProject: Project = {
  image: {} as any,
  name: 'JOB EXAMPLE',
  description: 'lorem',
  linkFrontend: 'https://example.com',
  linkBackend: null,
  linkBlog: null,
  linkFigma: null,
  linkRepository: 'https://example.com',
  skills: [],
  active: false,
};

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ProjectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    component.project = exampleProject;
    fixture.detectChanges();

    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('hover', () => {
      const method = spyOn(component, 'onHover');

      // On mouse enter
      component.onHover(new Event('Doom'));

      expect(method).toHaveBeenCalledTimes(1);
    });
    it('View details click', () => {
      const method = spyOn(component, 'onClickViewDetails');

      element = element.querySelector('app-button') as HTMLButtonElement;
      element.click();

      fixture.detectChanges();

      expect(method).toHaveBeenCalledTimes(1);
    });
  });
});
