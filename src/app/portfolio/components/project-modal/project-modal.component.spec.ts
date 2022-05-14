import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalComponent } from './project-modal.component';

describe('ProjectModalComponent', () => {
  let component: ProjectModalComponent;
  let fixture: ComponentFixture<ProjectModalComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Style test', () => {
    it('Get brackground-image', () => {
      component.url = 'https://wilmion.com/image/1';

      fixture.detectChanges();

      element = fixture.nativeElement;
      element = element.querySelector('section') as HTMLElement;

      expect(component.urlCssRule).toBe(`url("https://wilmion.com/image/1")`);
      expect(element.getAttribute('style')).toBe(
        `background-image: url("https://wilmion.com/image/1");`
      );
    });
    it("Show when blogUrl isn't undefined", () => {
      component.blogUrl = 'https://blog.com';

      fixture.detectChanges();

      element = fixture.nativeElement;
      element = element.querySelector(
        'a[href="https://blog.com"]'
      ) as HTMLElement;

      expect(element).toBeTruthy();
    });
  });
});
