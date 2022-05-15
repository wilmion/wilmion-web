import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Job } from '@models/job.model';
import { Project } from '@models/project.model';
import { Skill } from '@models/skill.model';
import { VerbsButton } from '@core/utils/getVerbsFromButton.util';

import { ApiService } from '@core/services/api/api.service';
import { Store } from '@ngrx/store';

import { initialStateTest } from '@tests/mocks/initialState';

import { MainComponent } from './main.component';

interface IStore {
  skills: Skill[];
  projects: Project[];
  jobs: Job[];
}

describe('MainComponent - Portfolio', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let apiService: ApiService;
  let store: Store<IStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MainComponent],
      providers: [
        provideMockStore({ initialState: initialStateTest }),
        ApiService,
        AsyncPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    component.currentProjectView = initialStateTest.projects[0];
    fixture.detectChanges();

    apiService = TestBed.inject(ApiService);
    store = TestBed.inject(Store);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Verbs on button's modal", () => {
    it('When is Frontend', () => {
      expect(component.getLinkOfButton('Ver')).toBe(
        initialStateTest.projects[0].linkFrontend
      );
    });

    it('When is Backend', () => {
      expect(component.getLinkOfButton('Ver backend')).toBe(
        initialStateTest.projects[0].linkBackend
      );
    });

    it('When is Figma', () => {
      expect(component.getLinkOfButton('Ver figma')).toBe(
        initialStateTest.projects[0].linkFigma
      );
    });
  });

  it('Get buttons', () => {
    const result = component.buttons;

    const expected: VerbsButton[] = [
      {
        verb: 'Ver',
        skill: initialStateTest.skills[3],
      },
    ];

    expect(result.length).toBe(1);
    expect(result).toEqual(expected);
  });
});
