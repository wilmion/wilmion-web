import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { NavigationMobileComponent } from './navigation-mobile.component';

describe('NavigationMobileComponent', () => {
  let component: NavigationMobileComponent;
  let fixture: ComponentFixture<NavigationMobileComponent>;

  let store: MockStore<{ darkMode: boolean }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationMobileComponent],
      providers: [provideMockStore({ initialState: { darkMode: false } })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject<any>(Store);
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
