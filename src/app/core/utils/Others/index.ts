import { Skill } from '@models/skill.model';
import { Job } from '@models/job.model';

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

export function createList(job: Job | undefined) {
  if (!job) throw new Error('😵‍💫');

  const funct1 = job.function1;
  const funct2 = job.function2;
  const funct3 = job.function3;
  const funct4 = job.function4;

  const listsFunction = [funct1, funct2, funct3, funct4];

  const time = [job.from, job.to];

  return {
    listsFunction,
    time,
  };
}

export function getLastDate(job: Job | undefined) {
  const { time } = createList(job);

  const lastDate = time[1] === 'Currently' ? 'Actualidad' : time[1];

  return lastDate;
}

export function getPaths(event: any) {
  let url = event['url'] as string | undefined;

  if (!url) return [];

  url = url.replace('/admin', '');

  const paths = ['Dashboard'];

  paths.push(...url.split('/'));

  paths.splice(1, 1);

  return paths;
}
