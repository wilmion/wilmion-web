import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { NotFoundAdminComponent } from './not-found-admin.component';

describe('NotFoundAdminComponent', () => {
  let component: NotFoundAdminComponent;
  let fixture: ComponentFixture<NotFoundAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [NotFoundAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
