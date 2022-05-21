import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skill } from '@models/skill.model';
import { SharedModule } from '@shared/shared.module';

import { SkillComponent } from './skill.component';

const skill: Skill = {
  name: '',
  backgroundColor: '',
  iconColor: '',
};

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [SkillComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Show data information', () => {
    component.skill = skill;

    fixture.detectChanges();

    let element: HTMLElement | null = fixture.nativeElement as HTMLElement;
    element = element.querySelector('.skill');

    expect(element).toBeTruthy();
  });
});
