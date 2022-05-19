import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { IAPI } from '@models/api.model';
import { Image } from '@models/image.model';

import { ApiService } from '@core/services/api/api.service';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

import { ManageJobsComponent } from './manage-jobs.component';

import { Subject } from 'rxjs';

describe('ManageJobsComponent', () => {
  let component: ManageJobsComponent;
  let fixture: ComponentFixture<ManageJobsComponent>;

  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ManageJobsComponent],
      providers: [
        provideMockStore({ initialState: initialStateTest }),
        ApiService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    apiService = TestBed.inject(ApiService);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    const mock: IAPI<Image> = {
      message: 'SUCCESS',
      payload: initialStateTest.skills[3].image as Image,
      status: 200,
    };

    it('submit: Should not valid, no excecuted the function ', () => {
      component.jobSelected = undefined;
      component.files = [];

      const subject = new Subject<IAPI<Image>>();
      subject.next(mock);

      const method = spyOn(apiService, 'createImage');
      method.and.returnValue(subject.asObservable());

      component.submit(new Event('submit'));

      expect(method).toHaveBeenCalledTimes(0);
    });

    it('submit: Should execute function _/ ', () => {
      component.jobSelected = initialStateTest.jobs[0];
      component.files = [
        { blob: '' as any, imageUrl: 'http://wilmion.com', size: '100x100' },
      ];

      const subject = new Subject<IAPI<Image>>();
      subject.next(mock);

      const method = spyOn(apiService, 'createImage');
      method.and.returnValue(subject.asObservable());

      component.submit(new Event('submit'));

      expect(method).toHaveBeenCalledTimes(1);
    });

    it('openModal: Should be files.length equal to 1 and change job selected', async () => {
      await component.openModal(initialStateTest.jobs[0]);

      expect(component.files.length).toBe(1);
      expect(component.jobSelected).toEqual(initialStateTest.jobs[0]);
    });
  });
});
