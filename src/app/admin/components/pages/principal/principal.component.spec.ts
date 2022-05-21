import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { AdminModule } from 'src/app/admin/admin.module';

import { ApiService } from '@core/services/api/api.service';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

import { PrincipalComponent } from './principal.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        SharedModule,
        AdminModule,
      ],
      declarations: [PrincipalComponent],
      providers: [
        ApiService,
        provideMockStore({ initialState: initialStateTest }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Intercambiate Verbs', () => {
    it("Should be 'New Users [last 7 days]'", () => {
      const expected = 'New Users [last 7 days]';

      const result = component.intercambiateVerbs('NU');

      expect(result).toBe(expected);
    });

    it("Should be 'Visits to the blog post[last 7 days]'", () => {
      const expected = 'Visits to the blog post[last 7 days]';

      const result = component.intercambiateVerbs('VTTBP');

      expect(result).toBe(expected);
    });
  });
});
