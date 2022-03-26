import { Job } from '@models/job.model';

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
