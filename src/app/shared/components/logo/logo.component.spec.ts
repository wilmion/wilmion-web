import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  let nativeElement: HTMLElement;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [LogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Click on the logo', () => {
    const method = spyOn(component, 'onClick');

    const element = nativeElement.querySelector('h1') as HTMLElement;

    element.click();

    expect(method).toHaveBeenCalledTimes(1);
  });

  describe('Styles', () => {
    it('When set color class', () => {
      component.colorClass = 'text-secondary';

      fixture.detectChanges();

      let element = fixture.nativeElement as HTMLElement;
      element = element.querySelector('h1') as HTMLElement;

      const classList = element.classList;

      expect(classList).toContain('text-secondary');
    });

    it('When no set color class', () => {
      const element = nativeElement.querySelector('h1') as HTMLElement;

      const classList = element.classList;

      expect(classList).toContain('text-primary');
    });
  });
});
