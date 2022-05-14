import { Skill } from '../models/skill.model';

export interface VerbsButton {
  readonly verb: 'Ver' | 'Ver backend' | 'Ver figma';
  readonly skill: Skill;
}

export function getVerbsFromButton(skill: Skill): false | VerbsButton {
  const frontendNames = ['React.js', 'Angular', 'Next'];
  const backendNames = ['Node JS', 'Express', 'Nest.js', 'Next'];

  const skillName = skill.name;

  let verb: 'Ver' | 'Ver backend' | 'Ver figma' = 'Ver';

  if (frontendNames.includes(skillName)) verb = 'Ver';
  else if (backendNames.includes(skillName)) verb = 'Ver backend';
  else if (skillName === 'Figma') verb = 'Ver figma';
  else return false;

  return {
    verb,
    skill,
  };
}
