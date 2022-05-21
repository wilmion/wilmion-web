import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { initialStateTest } from '@tests/mocks/initialState';

import { CardSkillComponent } from './skill.component';

describe('SkillComponent - Card', () => {
  let component: CardSkillComponent;
  let fixture: ComponentFixture<CardSkillComponent>;

  let parent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CardSkillComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSkillComponent);
    component = fixture.componentInstance;
    component.skill = initialStateTest.skills[0];
    fixture.detectChanges();

    parent = fixture.nativeElement;
  });

  it('Should create', () => {
    const element = parent.querySelector('.admin-card') as HTMLElement;

    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });
});
