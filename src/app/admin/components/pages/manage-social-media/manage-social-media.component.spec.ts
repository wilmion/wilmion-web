import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiService } from '@core/services/api/api.service';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

import { ManageSocialMediaComponent } from './manage-social-media.component';

describe('ManageComponent', () => {
  let component: ManageSocialMediaComponent;
  let fixture: ComponentFixture<ManageSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ManageSocialMediaComponent],
      providers: [
        provideMockStore({ initialState: initialStateTest }),
        ApiService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('Open modal', () => {
      component.openModal({
        ...initialStateTest.socialMedia[0],
        redirectUrl: 'IMAGE_URL',
      });

      expect(component.link.value).toBe('IMAGE_URL');
    });

    it('Close Modal', () => {
      component.closeModal();

      expect(component.modal).toBe(false);
    });
  });
});
