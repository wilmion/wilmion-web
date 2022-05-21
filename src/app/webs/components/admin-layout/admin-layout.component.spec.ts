import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

import { AdminModule } from 'src/app/admin/admin.module';

import { AdminLayoutComponent } from './admin-layout.component';

describe('AdminLayoutComponent', () => {
  let component: AdminLayoutComponent;
  let fixture: ComponentFixture<AdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModule, RouterTestingModule],
      declarations: [AdminLayoutComponent],
      providers: [provideMockStore({ initialState: initialStateTest })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
