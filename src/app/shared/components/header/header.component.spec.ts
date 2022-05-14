import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let store: MockStore<{ darkMode: boolean }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [provideMockStore({ initialState: { darkMode: false } })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject<any>(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Open menu', () => {
    const element = fixture.nativeElement as HTMLElement;
    const icon = element.querySelector(
      '.header-navigation-icon-menu'
    ) as HTMLElement;
    icon.click();

    expect(component.openMenu).toBe(true);
  });

  it('Close menu', () => {
    const element = fixture.nativeElement as HTMLElement;
    const icon = element.querySelector('app-navigation-mobile') as HTMLElement;
    icon.click();

    expect(component.openMenu).toBe(false);
  });
});
