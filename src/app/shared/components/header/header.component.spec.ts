import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '@shared/shared.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let store: Store<{ darkMode: boolean }>;
  let parent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule.withRoutes([])],
      declarations: [HeaderComponent],
      providers: [provideMockStore({ initialState: { darkMode: false } })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(Store);
    parent = fixture.nativeElement;
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

  it("Activate dark mode", () => {
    const method = spyOn(store, "dispatch");

    let element = parent.querySelector("app-checkbox-toogle") as HTMLElement;
    element = element.querySelector("div") as HTMLElement;

    element.click();

    fixture.detectChanges()

    expect(method).toHaveBeenCalledTimes(1)

  })
});
