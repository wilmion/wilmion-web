import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';

import { Image } from '@models/image.model';
import { User } from '@models/user.model';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

import { HeaderAdminComponent } from './header-admin.component';

const user: User = {
  username: 'wilmion',
  name: 'wilmion',
  job: 'asddsa',
  email: 'wilmion93@gmail.com',
  image: initialStateTest.skills[3].image as Image,
};

describe('HeaderAdminComponent', () => {
  let component: HeaderAdminComponent;
  let fixture: ComponentFixture<HeaderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), SharedModule],
      declarations: [HeaderAdminComponent],
      providers: [provideMockStore({ initialState: { user } })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
