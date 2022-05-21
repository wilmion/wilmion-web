import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiService } from '@core/services/api/api.service';
import { SharedModule } from '@shared/shared.module';

import { StatsComponent } from './stats.component';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, SharedModule],
      declarations: [StatsComponent],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Get verbs', () => {
    it("Should be 'Click on the page' when the pattern is 'NU'", () => {
      const expected = 'Click on the page';
      const result = component.intercambiateVerbs('NU');

      expect(expected).toBe(result);
    });

    it("Should be 'Visits to the contact page' when the pattern is 'VTTCP'", () => {
      const expected = 'Visits to the contact page';
      const result = component.intercambiateVerbs('VTTCP');

      expect(expected).toBe(result);
    });

    it("Should be 'Visits to the Portafolio page' when the pattern is 'VTTPP'", () => {
      const expected = 'Visits to the Portafolio page';
      const result = component.intercambiateVerbs('VTTPP');

      expect(expected).toBe(result);
    });

    it("Should be 'Visits to the blog post' when the pattern is 'VTTBP'", () => {
      const expected = 'Visits to the blog post';
      const result = component.intercambiateVerbs('VTTBP');

      expect(expected).toBe(result);
    });

    it("Should be 'Number of clicks when submitting the form' when the pattern is 'NOCWSTF'", () => {
      const expected = 'Number of clicks when submitting the form';
      const result = component.intercambiateVerbs('NOCWSTF');

      expect(expected).toBe(result);
    });

    it("Should be 'Click on the page' when the pattern is anything value", () => {
      const expected = 'Click on the page';
      const result = component.intercambiateVerbs('OTHER_VALUE');

      expect(expected).toBe(result);
    });
  });
});
