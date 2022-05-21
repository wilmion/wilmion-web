import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { ApiService } from '@core/services/api/api.service';

import { FileComponent } from './file.component';

describe('FileComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;

  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      declarations: [FileComponent],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Select Files have a called in 1 time', () => {
    const method = spyOn(component, 'selectFiles');

    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector(
      '.input-file__content__contain'
    ) as HTMLElement;

    element.click();

    expect(method).toHaveBeenCalledTimes(1);
  });

  it('On delete Blob', () => {
    const method = spyOn(component, 'onDeleteBlob');

    component.label = 'LABEL';
    component.max = 1;
    component.blobs = [
      {
        blob: '' as any,
        imageUrl: '',
        size: '',
      },
    ];

    fixture.detectChanges();

    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector(
      '.input-file__content__value__icon'
    ) as HTMLElement;

    element.click();

    expect(method).toHaveBeenCalledTimes(1);
  });
});
