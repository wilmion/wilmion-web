import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { PortfolioModule } from '@portfolio/portfolio.module';

import { VerbsButton } from '@core/utils';

import { ApiService } from '@core/services/api/api.service';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';
import { setMockApiService } from '@tests/mocks/apiServiceResponse.mock';

import { MainComponent } from './main.component';

describe('MainComponent - Portfolio', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule, PortfolioModule],
      declarations: [MainComponent],
      providers: [
        provideMockStore({ initialState: initialStateTest }),
        ApiService,
        AsyncPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    apiService = TestBed.inject(ApiService);
    setMockApiService(apiService);

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    component.currentProjectView = initialStateTest.projects[0];
    fixture.detectChanges();
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
