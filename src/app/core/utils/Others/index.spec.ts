import { Job } from '@models/job.model';
import { Skill } from '@models/skill.model';

import { initialStateTest } from '@tests/mocks/initialState';

import {
  createList,
  getLastDate,
  getPaths,
  getVerbsFromButton,
  VerbsButton,
} from '.';

describe('Others - Utils', () => {
  let skill: Skill;
  let job: Job;
  let eventMock: { url: string | undefined };

  beforeEach(() => {
    skill = initialStateTest.skills[0];
    job = initialStateTest.jobs[0];
    eventMock = {
      url: 'admin/other-path',
    };
  });

  describe('getVerbsFromButton', () => {
    it('Should return a button with verb of frontend', () => {
      skill = { ...initialStateTest.skills[0], name: 'React.js' };

      const result = getVerbsFromButton(skill);

      const expected: VerbsButton = {
        verb: 'Ver',
        skill,
      };

      expect(result).toEqual(expected);
    });

    it('Should return a button with verb of backend', () => {
      skill = { ...initialStateTest.skills[0], name: 'Express' };

      const result = getVerbsFromButton(skill);

      const expected: VerbsButton = {
        verb: 'Ver backend',
        skill,
      };

      expect(result).toEqual(expected);
    });

    it('Should return a button with verb of figma', () => {
      skill = { ...initialStateTest.skills[0], name: 'Figma' };

      const result = getVerbsFromButton(skill);

      const expected: VerbsButton = {
        verb: 'Ver figma',
        skill,
      };

      expect(result).toEqual(expected);
    });

    it('Should return false', () => {
      skill = { ...initialStateTest.skills[0], name: 'OTHER SKILL' };

      const result = getVerbsFromButton(skill);

      const expected = false;

      expect(result).toEqual(expected);
    });
  });

  describe('createList', () => {
    it('Should return a throw error when the job not exist', () => {
      try {
        createList(undefined);
      } catch (e: any) {
        expect(e).toBeTruthy();
        expect(e.message).toBe('😵‍💫');
      }
    });

    it('Should return list function and time in the object', () => {
      job = {
        ...job,
        function1: 'a',
        function2: 'b',
        function3: 'c',
        function4: 'd',
        to: 'Currently',
        from: '05-21-2022',
      };

      const expected = {
        listsFunction: ['a', 'b', 'c', 'd'],
        time: ['05-21-2022', 'Currently'],
      };

      const result = createList(job);

      expect(result).toEqual(expected);
    });
  });

  describe('getLastDate', () => {
    it("Should be 'Actualidad'", () => {
      job = { ...job, to: 'Currently' };

      const result = getLastDate(job);

      const expected = 'Actualidad';

      expect(result).toBe(expected);
    });

    it('Should be a string date', () => {
      job = { ...job, to: '5-21-2022' };

      const result = getLastDate(job);

      const expected = '5-21-2022';

      expect(result).toBe(expected);
    });
  });

  describe('getPaths', () => {
    it('Should be a empty array', () => {
      eventMock.url = undefined;

      const result = getPaths(eventMock);

      expect(result).toEqual([]);
    });

    it('Should be a array with string that represents each section', () => {
      const result = getPaths(eventMock);
      const expected = ['Dashboard', 'other-path'];

      expect(result).toEqual(expected);
    });
  });
});
