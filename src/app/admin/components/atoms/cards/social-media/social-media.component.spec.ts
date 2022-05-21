import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { initialStateTest } from '@tests/mocks/initialState';

import { SocialMediaComponent } from './social-media.component';

describe('SocialMediaComponent - Card', () => {
  let component: SocialMediaComponent;
  let fixture: ComponentFixture<SocialMediaComponent>;

  let parent: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [SocialMediaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaComponent);
    component = fixture.componentInstance;
    component.socialMedia = initialStateTest.socialMedia[0];

    fixture.detectChanges();

    parent = fixture.nativeElement;
  });

  it('Should create', () => {
    const element = parent.querySelector('.admin-card') as HTMLElement;

    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });

  describe('Events', () => {
    it("onEdit: Should execute the 'edit'.emit function with parameter", () => {
      const method = spyOn(component.edit, 'emit');

      component.onEdit();

      expect(method).toHaveBeenCalledOnceWith(initialStateTest.socialMedia[0]);
    });
  });
});
