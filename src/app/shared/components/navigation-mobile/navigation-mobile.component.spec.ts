import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '@shared/shared.module';

import { NavigationMobileComponent } from './navigation-mobile.component';

describe('NavigationMobileComponent', () => {
  let component: NavigationMobileComponent;
  let fixture: ComponentFixture<NavigationMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule.withRoutes([])],
      declarations: [NavigationMobileComponent],
      providers: [provideMockStore({ initialState: { darkMode: false } })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Close function called 1 times', () => {
    component.open = true;
    const method = spyOn(component, 'onClose');

    fixture.detectChanges();

    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector('a') as HTMLElement;

    element.click();

    expect(method).toHaveBeenCalledTimes(1);
  });
});
