import { Skill } from '../models/skill.model';

export interface VerbsButton {
  readonly verb: string;
  readonly skill: Skill;
}

export function getVerbsFromButton(
  skillName: string,
  skills: Skill[]
): false | VerbsButton {
  const frontendNames = ['React.js', 'Angular', 'Next'];
  const backendNames = ['Node JS', 'Express', 'Nest.js', 'Next'];

  let verb = '';

  if (frontendNames.includes(skillName)) verb = 'Ver';
  else if (backendNames.includes(skillName)) verb = 'Ver backend';
  else if (skillName === 'Figma') verb = 'Ver figma';
  else return false;

  const skill = skills.find((s) => s.name === skillName);

  if (!skill) return false;

  return {
    verb,
    skill,
  };
}
