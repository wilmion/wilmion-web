import { Image } from '@models/image.model';
import { Project } from '@models/project.model';

import { initialStateTest } from '@tests/mocks/initialState';

import { getIconBackendOrFrontend } from '.';

describe('Icons - Utils', () => {
  let project: Project;

  beforeEach(() => {
    project = {
      image: initialStateTest.skills[3].image as Image,
      name: 'PROJECT',
      description: 'Lorem',
      linkFrontend: 'https://wilmion.com',
      linkBackend: null,
      linkBlog: null,
      linkFigma: null,
      linkRepository: 'https://github.com',
      skills: [],
      active: false,
    };
  });

  describe('getIconBackendOrFrontend', () => {
    it('Should return icon of the frontend', () => {
      project.skills = initialStateTest.skills;

      const expected = initialStateTest.skills[3].image as Image;

      const result = getIconBackendOrFrontend(project, false);

      expect(result).toEqual(expected.imageUrl);
    });

    it('Should return icon of the backend', () => {
      const expected = '<svg>Backend SVG</svg>';

      project.skills = [
        ...initialStateTest.skills,
        {
          id: 5,
          name: 'Express',
          backgroundColor: '#FFFFFF',
          iconColor: '#FFFFF',
          icon: expected,
        },
      ];

      const result = getIconBackendOrFrontend(project, true);

      expect(result).toEqual(expected);
    });

    it('Should return icon that it have a major piority', () => {
      const expected = initialStateTest.skills[3].image as Image;

      project.skills = [
        ...initialStateTest.skills,
        {
          id: 5,
          name: 'Javascript',
          backgroundColor: '#FFFFFF',
          iconColor: '#FFFFF',
          icon: '<svg>JS svg</svg>',
        },
      ];

      const result = getIconBackendOrFrontend(project, false);

      expect(result).toEqual(expected.imageUrl);
    });

    it('Should return a first icon of the project when the front or the backend icon not exist', () => {
      const expected = '<svg>Other SVG</svg>';

      project.skills = [
        {
          id: 5,
          name: 'Other Icon',
          backgroundColor: '#FFFFFF',
          iconColor: '#FFFFF',
          icon: expected,
        },
      ];

      const result = getIconBackendOrFrontend(project, true); // Return equal when is false

      expect(result).toEqual(expected);
    });

    it('Should return a "NOT SKILLS HAVE" when not have a skills in the project', () => {
      const expected = 'NOT SKILLS HAVE';

      project.skills = [];

      const result = getIconBackendOrFrontend(project, true); // Return equal when is false

      expect(result).toEqual(expected);
    });
  });
});
