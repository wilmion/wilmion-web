import { Project } from '@models/project.model';

const backend: Options[] = [
  { name: 'NODEJS', piority: 1 },
  { name: 'NEXT', piority: 2 },
  { name: 'EXPRESS', piority: 2 },
  { name: 'NESTJS', piority: 2 },
];

const frontend: Options[] = [
  { name: 'REACTJS', piority: 2 },
  { name: 'ANGULAR', piority: 2 },
  { name: 'NEXT', piority: 3 },
  { name: 'JAVASCRIPT', piority: 1 },
  { name: 'TYPESCRIPT', piority: 1 },
];

export function getIconBackendOrFrontend(
  project: Project | undefined,
  back: boolean
) {
  if (!project) return '';

  const namesSkill = project.skills.map((s) => s.name.toLocaleUpperCase());

  let includesIcon: Options[] = [];

  namesSkill.forEach((n) => {
    let includes: Options | undefined;
    if (back) {
      includes = backend.find((b) => b.name === n);
    } else {
      includes = frontend.find((b) => b.name === n);
    }

    if (includes) includesIcon.push(includes);
  });

  let major: Options = {
    name: '',
    piority: 0,
  };

  includesIcon.forEach((i) => {
    if (major.piority < i.piority) major = i;
  });

  const skill = project.skills.find(
    (s) => s.name.toLocaleUpperCase() === major.name
  );

  if (!skill) return project.skills[0].icon;

  return skill.icon;
}

interface Options {
  name: string;
  piority: number;
}
