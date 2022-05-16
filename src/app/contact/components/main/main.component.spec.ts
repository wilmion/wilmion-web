import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from '@core/services/api/api.service';

import { StaticPage } from '@models/static-page.model';

import { MainComponent } from './main.component';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

describe('MainComponent - Contact', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MainComponent],
      providers: [
        provideMockStore({ initialState: initialStateTest }),
        ApiService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Get contact information', () => {
    it("It isn't exist", () => {
      const mock: StaticPage[] = [
        {
          introduction: 'Example',
          responseQuestion: 'lorem',
          contactEmail: undefined,
        },
      ];

      expect(component.getContactInfo(mock)).toBe(undefined);
    });

    it('It is exist', () => {
      const mock: StaticPage[] = [
        {
          introduction: 'Example',
          responseQuestion: 'lorem',
          contactEmail: 'wilmion92@gmail.com',
        },
      ];

      expect(component.getContactInfo(mock)).toBe(mock[0]);
    });
  });
});
