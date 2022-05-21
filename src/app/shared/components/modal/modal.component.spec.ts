import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.open = true;
    component.title = 'MODAL TITLE';

    fixture.detectChanges();

    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('On click on cross', () => {
      const method = spyOn(component, 'onClickOnCross');

      const element = nativeElement.querySelector('.cross') as HTMLElement;

      element.click();

      expect(method).toHaveBeenCalledTimes(1);
    });
  });
});
