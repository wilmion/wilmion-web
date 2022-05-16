import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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

  // TODO: Complete Tests
});
