import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from '@core/services/api/api.service';

import { setMockApiService } from '@tests/mocks/apiServiceResponse.mock';

import { BiographyResumeComponent } from './biography-resume.component';

describe('BiographyResumeComponent', () => {
  let component: BiographyResumeComponent;
  let fixture: ComponentFixture<BiographyResumeComponent>;

  let apiService: ApiService;
  let parent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      declarations: [BiographyResumeComponent],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    apiService = TestBed.inject(ApiService);
    setMockApiService(apiService);

    fixture = TestBed.createComponent(BiographyResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    parent = fixture.nativeElement;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be a string in the image', () => {
    const image = parent.querySelector('img') as HTMLImageElement;

    expect(image.src).toBe('https://wilmion.com/api/cdn/image.png');
  });
});
