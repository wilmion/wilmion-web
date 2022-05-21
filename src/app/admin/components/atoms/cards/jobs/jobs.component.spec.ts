import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { initialStateTest } from '@tests/mocks/initialState';

import { JobsCardManageComponent } from './jobs.component';

describe('JobsComponent - Card', () => {
  let component: JobsCardManageComponent;
  let fixture: ComponentFixture<JobsCardManageComponent>;

  let parent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [JobsCardManageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsCardManageComponent);
    component = fixture.componentInstance;

    component.job = initialStateTest.jobs[0];

    fixture.detectChanges();

    parent = fixture.nativeElement;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it("onSelect: Should execute the 'select' output with the 'to' property in currently", () => {
      const method = spyOn(component.select, 'emit');

      const element = parent.querySelector(
        '.manage-jobs-card__header'
      ) as HTMLElement;
      element.click();

      expect(method).toHaveBeenCalledOnceWith({
        ...initialStateTest.jobs[0],
        to: 'Currently',
      });
    });

    it("onSelect: Should execute the 'select' output with the 'to' property in Date format", () => {
      component.job = initialStateTest.jobs[1];

      fixture.detectChanges();

      const method = spyOn(component.select, 'emit');

      const element = parent.querySelector(
        '.manage-jobs-card__header'
      ) as HTMLElement;
      element.click();

      expect(method).toHaveBeenCalledOnceWith({
        ...initialStateTest.jobs[1],
        to: '2021-12-05',
      });
    });

    it("onActivators: Should execute the 'activators' output with parameters", () => {
      const method = spyOn(component.activators, 'emit');

      const element = parent.querySelector('.indicator') as HTMLElement;
      element.click();

      expect(method).toHaveBeenCalledOnceWith({
        id: '1',
        activate: false,
      });
    });
  });
});
