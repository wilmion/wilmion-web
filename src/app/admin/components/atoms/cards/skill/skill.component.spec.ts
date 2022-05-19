import { ComponentFixture, TestBed } from '@angular/core/testing';

import { initialStateTest } from '@tests/mocks/initialState';

import { CardSkillComponent } from './skill.component';

describe('SkillComponent - Card', () => {
  let component: CardSkillComponent;
  let fixture: ComponentFixture<CardSkillComponent>;

  let parent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
