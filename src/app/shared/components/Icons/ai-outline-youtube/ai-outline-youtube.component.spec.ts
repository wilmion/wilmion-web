import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiOutlineYoutubeComponent } from './ai-outline-youtube.component';

describe('AiOutlineYoutubeComponent', () => {
  let component: AiOutlineYoutubeComponent;
  let fixture: ComponentFixture<AiOutlineYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiOutlineYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiOutlineYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
