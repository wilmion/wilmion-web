import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';

import { Image } from '@models/image.model';
import { User } from '@models/user.model';

import { StorageService } from '@core/services/storage/storage.service';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';
import dataNav from './mock-navigation';

import { NavigationComponent } from './navigation.component';

const user: User | null = {
  username: 'wilmion',
  name: 'wil',
  job: 'asd',
  email: 'adsadsads@gmail.com',
  image: initialStateTest.skills[3].image as Image,
};

describe('NavigationComponent - Admin[Atoms]', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  let parent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), SharedModule],
      declarations: [NavigationComponent],
      providers: [StorageService, provideMockStore({ initialState: { user } })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    parent = fixture.nativeElement as HTMLElement;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('logOut: Should execute event', () => {
      const method = spyOn(component, 'logOut');

      const element = parent.querySelector(
        '.navigation-admin__list__item__section.cursor-pointer'
      ) as HTMLElement;
      element.click();

      expect(method).toHaveBeenCalledTimes(1);
    });

    it('toggleMenu: Should execute the function', () => {
      const method = spyOn(component, 'toggleMenu');

      const element = parent.querySelector(
        '#icon-nav-menu-Manage'
      ) as HTMLElement;
      element.click();

      expect(method).toHaveBeenCalledTimes(1);
    });

    it('toggleMenu: Should activate the menu', () => {
      const element = parent.querySelector(
        '#icon-nav-menu-Manage'
      ) as HTMLElement;
      element.click();

      const expected = dataNav;

      expected[0].paths[2].subsectionsActive = true;

      expect(component.mockNavigation).toEqual(expected);
    });
  });
});
