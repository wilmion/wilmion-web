import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { AdminModule } from 'src/app/admin/admin.module';

import { IAPI } from '@core/models/api.model';
import { Project } from '@core/models/project.model';

import { ApiService } from '@core/services/api/api.service';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

import { ManageProjectsComponent } from './manage-projects.component';

import { Subject } from 'rxjs';
import { Skill } from '@core/models/skill.model';

describe('ManageProjectsComponent', () => {
  let component: ManageProjectsComponent;
  let fixture: ComponentFixture<ManageProjectsComponent>;

  let apiService: ApiService;
  let parent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        SharedModule,
        AdminModule,
      ],
      declarations: [ManageProjectsComponent],
      providers: [
        ApiService,
        provideMockStore({ initialState: initialStateTest }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    apiService = TestBed.inject(ApiService);
    parent = fixture.nativeElement;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it("activateOrDeactivateProject: Should execute 'activateProject()' of the apiService", () => {
      const subject = new Subject<IAPI<Project>>();
      subject.next({
        message: '',
        payload: initialStateTest.projects[0],
        status: 200,
      });

      const method = spyOn(apiService, 'activateProject');

      method.and.returnValue(subject.asObservable());

      component.activateOrDeactivateProject({
        activate: true,
        id: 'ID_EXAMPLE',
      });

      expect(method).toHaveBeenCalledTimes(1);
    });

    it("activateOrDeactivateProject: Should execute 'deactivateProject()' of the apiService", () => {
      const subject = new Subject<IAPI<Project>>();
      subject.next({
        message: '',
        payload: initialStateTest.projects[0],
        status: 200,
      });

      const method = spyOn(apiService, 'deactivateProject');

      method.and.returnValue(subject.asObservable());

      component.activateOrDeactivateProject({
        activate: false,
        id: 'ID_EXAMPLE',
      });

      expect(method).toHaveBeenCalledTimes(1);
    });

    it('openModal: Should the files have not empty', async () => {
      await component.openModal(initialStateTest.projects[0]);

      expect(component.files.length).toBe(1);
    });

    it('closeModal: Should change the state', () => {
      component.modal = true;

      component.closeModal();

      expect(component.modal).toBe(false);
    });
  });

  describe('ShortCuts', () => {
    it('skillInProject: Should return a skill that it contain in projects', () => {
      component.currentProject = initialStateTest.projects[0];

      const expected = initialStateTest.skills[0];
      const result = component.skillInProject('SKILL 1');

      expect(result).toEqual(expected);
    });

    it('skillInProject: Should return true when the name is equal to search', () => {
      component.currentProject = initialStateTest.projects[0];
      component.searchSkill.setValue('angu');

      const expected = false;
      const result = component.skillInProject('Angular');

      expect(result).toBe(expected);
    });

    it('skillInProject: Should return true when not search.', () => {
      component.currentProject = initialStateTest.projects[0];
      component.searchSkill.setValue('react');

      const expected = true;
      const result = component.skillInProject('PHP');

      expect(result).toBe(expected);
    });

    it('addSkill: Should add state on the currentProject skill', () => {
      component.currentProject = initialStateTest.projects[0];

      const newSkill: Skill = {
        name: 'NEW SKILL',
        backgroundColor: '#FFFFFF',
        iconColor: '#FFFFFF',
      };

      const expected = [...initialStateTest.projects[0].skills, newSkill];
      component.addSkill(newSkill);

      expect(component.currentProject.skills).toEqual(expected);
    });

    it('deleteSkill: Should a least element on skills array on currentProject', () => {
      component.currentProject = initialStateTest.projects[0];

      const skillsList = initialStateTest.projects[0].skills;

      const skillDeleted: Skill = skillsList[0];

      const expected = skillsList.filter(
        (skill) => skill.id !== skillDeleted.id
      );

      component.deleteSkill(skillDeleted);

      expect(component.currentProject.skills).toEqual(expected);
    });
  });

  describe('Styles', () => {
    it('Should be thurthy when the error is diferrent to empty string', () => {
      component.error = 'ERROR_EXAMPLE';
      component.openModal(initialStateTest.projects[0]);

      fixture.detectChanges();

      const errorHtml = parent.querySelector('#text-error') as HTMLElement;

      expect(errorHtml).toBeTruthy();
      expect(errorHtml.textContent).toBe(' ERROR_EXAMPLE ');
    });
  });
});
