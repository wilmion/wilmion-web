import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '@shared/shared.module';
import { initialStateTest } from '@tests/mocks/initialState';

import { PrincipalLayoutComponent } from './principal-layout.component';

describe('PrincipalLayoutComponent', () => {
  let component: PrincipalLayoutComponent;
  let fixture: ComponentFixture<PrincipalLayoutComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), SharedModule],
      declarations: [PrincipalLayoutComponent],
      providers: [provideMockStore({ initialState: initialStateTest })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject<Router>(Router);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Get titles for SEO', () => {
    it('/ = HOME', () => {
      spyOn(component, 'getActualRute').and.returnValue('');

      expect(component.getTitleOfRute()).toBe(undefined);
    });

    it('/about = SOBRE WILMION', () => {
      spyOn(component, 'getActualRute').and.returnValue('about');

      expect(component.getTitleOfRute()).toBe('SOBRE WILMION');
    });

    it('/portfolio = PORTAFOLIO', () => {
      spyOn(component, 'getActualRute').and.returnValue('portfolio');

      expect(component.getTitleOfRute()).toBe('PORTAFOLIO');
    });

    it('/contact-me = CONTÁCTAME', () => {
      spyOn(component, 'getActualRute').and.returnValue('contact-me');

      expect(component.getTitleOfRute()).toBe('CONTÁCTAME');
    });

    it('/blog = BLOG', () => {
      spyOn(component, 'getActualRute').and.returnValue('blog');

      expect(component.getTitleOfRute()).toBe('BLOG');
    });

    it('/any-route-that-not-exist = Wilmion - 404 😢', () => {
      spyOn(component, 'getActualRute').and.returnValue('any-route');

      expect(component.getTitleOfRute()).toBe(undefined);
    });
  });

  it('Get actual route', () => {
    component.actualRoute = '/about';

    expect(component.getActualRute()).toBe('about');
  });
});
