import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IAPI } from '@models/api.model';
import { StaticPage } from '@models/static-page.model';

import { ApiService } from '@core/services/api/api.service';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

import { ContactComponent } from './contact.component';

import { Subject } from 'rxjs';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  let apiService: ApiService;
  let store: Store<{ staticPages: StaticPage[] }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ContactComponent],
      providers: [
        ApiService,
        provideMockStore({ initialState: initialStateTest }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    apiService = TestBed.inject(ApiService);
    store = TestBed.inject(Store);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('submit: Should execute api function.', () => {
      const subject = new Subject<IAPI<StaticPage>>();
      subject.next({
        payload: initialStateTest.staticPages[1],
        message: 'ABC',
        status: 200,
      });

      const method = spyOn(apiService, 'updateStaticContent');
      method.and.returnValue(subject.asObservable());

      component.submit();

      expect(method).toHaveBeenCalledTimes(1);
    });

    it('fetchData: Should change state of static page', () => {
      const subject = new Subject<StaticPage[]>();
      subject.next(initialStateTest.staticPages);

      const method = spyOn(store, 'select');
      method.and.returnValue(subject.asObservable());

      component.fetchData();

      expect(method).toHaveBeenCalledTimes(1);
    });
  });
});
