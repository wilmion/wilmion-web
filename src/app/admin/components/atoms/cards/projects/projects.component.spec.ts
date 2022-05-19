import { ComponentFixture, TestBed } from '@angular/core/testing';

import { initialStateTest } from '@tests/mocks/initialState';

import { ProjectsCardManageComponent } from './projects.component';

describe('ProjectsComponent - Card', () => {
  let component: ProjectsCardManageComponent;
  let fixture: ComponentFixture<ProjectsCardManageComponent>;

  let parent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsCardManageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCardManageComponent);
    component = fixture.componentInstance;
    component.project = initialStateTest.projects[0];
    fixture.detectChanges();

    parent = fixture.nativeElement;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it("onClick: Should execute 'clickCard'.emit function", () => {
      const method = spyOn(component.clickCard, 'emit');

      const element = parent.querySelector(
        '.admin-card__content__header'
      ) as HTMLElement;
      element.click();

      expect(method).toHaveBeenCalledOnceWith(initialStateTest.projects[0]);
    });

    it("onClickIcon: Should execute 'actOrDeact'.emit function", () => {
      const method = spyOn(component.actOrDeact, 'emit');

      const element = parent.querySelector('.indicator') as HTMLElement;
      element.click();

      expect(method).toHaveBeenCalledOnceWith({
        activate: true,
        id: '1',
      });
    });
  });
});
