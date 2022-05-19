import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderNavigationComponent } from './header-navigation.component';

describe('HeaderNavigationComponent', () => {
  let component: HeaderNavigationComponent;
  let fixture: ComponentFixture<HeaderNavigationComponent>;

  let parent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [HeaderNavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    parent = fixture.nativeElement;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('onClick: Should execute the output.emit function', () => {
      const method = spyOn(component.toggleMenu, 'emit');

      const element = parent.querySelector('app-icon') as HTMLElement;
      element.click();

      expect(method).toHaveBeenCalledTimes(1);
    });
  });
});
