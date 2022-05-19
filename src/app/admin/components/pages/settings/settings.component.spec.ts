import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Store } from '@ngrx/store';
import { ApiService } from '@core/services/api/api.service';

import { User } from '@models/user.model';

import { provideMockStore } from '@ngrx/store/testing';

import { SettingsComponent } from './settings.component';

const user: User | null = {
  username: 'wilmion',
  name: 'Wilbert Aldair',
  job: 'Front',
  email: 'wilmion97@gmail.com',
  image: {
    resolution: '',
    imageUrl: 'https://platzi.com',
    size: '',
    md5: '',
  },
};

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  let store: Store<{ user: User | null }>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [SettingsComponent],
      providers: [
        provideMockStore({ initialState: { user } }),
        ApiService,
        FormBuilder,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    apiService = TestBed.inject(ApiService);
    store = TestBed.inject(Store);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Getters', () => {
    it('imageUrl: When not have selected files', () => {
      expect(component.imageUrl).toBe(user.image.imageUrl);
    });

    it('imageUrl: When have selected files', () => {
      component.files = [
        {
          blob: '' as any,
          imageUrl: 'https://wilmion.com/api/bob/image_example.png',
          size: '400x400',
        },
      ];

      expect(component.imageUrl).toBe(
        'https://wilmion.com/api/bob/image_example.png'
      );
    });
  });

  it('getValueOfForm: Should returned a control', () => {
    const result = component.getValueOfForm('username');

    const form = component.form as FormGroup;

    const control = form.get('username') as AbstractControl;

    expect(result).toEqual(control);
  });

  it('openModal: Should open modal', () => {
    const openModalSpy = spyOn(component, 'openModal');

    component.openModal();

    fixture.detectChanges();

    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector('.modal') as HTMLElement;

    expect(openModalSpy).toHaveBeenCalledOnceWith();
    expect(element).toBeTruthy();
  });

  it('setImage: Should execute the function', () => {
    const setImageSpy = spyOn(component, 'setImage');

    component.setImage([]);

    expect(setImageSpy).toHaveBeenCalledOnceWith([]);
  });

  it('updateData: Should execute', () => {
    const updateDataSpy = spyOn(component, 'updateData');

    let element = fixture.nativeElement as HTMLElement;

    element = element.querySelector('#icon-edit__name') as HTMLElement;

    element.click();

    expect(updateDataSpy).toHaveBeenCalledTimes(1);
  });
});
