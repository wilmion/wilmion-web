import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

import { SocialMedia } from '@models/socialMedia.model';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  let store: MockStore<{ socialMedia: SocialMedia[] }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      providers: [provideMockStore({ initialState: { socialMedia: [] } })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject<any>(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
