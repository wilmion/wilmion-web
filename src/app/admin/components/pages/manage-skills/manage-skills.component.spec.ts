import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { AdminModule } from 'src/app/admin/admin.module';

import { Image } from '@models/image.model';
import { Skill } from '@models/skill.model';

import { ApiService } from '@core/services/api/api.service';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

import { ManageSkillsComponent } from './manage-skills.component';

describe('ManageSkillsComponent', () => {
  let component: ManageSkillsComponent;
  let fixture: ComponentFixture<ManageSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        SharedModule,
        AdminModule,
      ],
      declarations: [ManageSkillsComponent],
      providers: [
        ApiService,
        provideMockStore({ initialState: initialStateTest }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('onButtonEdit: Should push image on files state of component', async () => {
      await component.onButtonEdit(initialStateTest.skills[3] as Skill);

      const result = component.files;
      const image = initialStateTest.skills[3].image as Image;

      expect(result[0].imageUrl).toBe(image.imageUrl);
      expect(result[0].size).toBe(image.size);
    });

    it('onButtonEdit: Should not have items on files', async () => {
      await component.onButtonEdit(initialStateTest.skills[0] as Skill);

      const result = component.files;

      expect(result).toEqual([]);
    });
  });
});
