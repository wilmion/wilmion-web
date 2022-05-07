import { HttpClientModule } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Stat, GraphicStat } from '@models/stat.model';
import { Image } from '@models/image.model';
import { Skill } from '@models/skill.model';
import { User } from '@models/user.model';
import { StaticPage } from '@models/static-page.model';
import { Job } from '@models/job.model';
import { Project } from '@models/project.model';

import { ApiService } from './api.service';
import { SocialMedia } from '@core/models/socialMedia.model';

function createMock(payload: any) {
  return {
    message: 'HTTP TEST',
    payload,
    status: 200,
  };
}

const dummyStats: Stat[] = [
  {
    type: 'NU',
    createdAt: 'ABC',
    id: '18',
    post: [],
  },
  {
    type: 'NU',
    createdAt: 'ABC',
    id: '19',
    post: [],
  },
];

const dummyStaticContent: StaticPage = {
  introduction: 'A simple introduction',
  responseQuestion: 'A simple response',
  contactEmail: 'Wilmion92@hotmail.com',
};

const dummyImage: Image = {
  imageUrl: 'https://wilmion.com',
  md5: 'MD5',
  size: '400x400',
  resolution: '1:1',
};

const dummyUser: User = {
  username: 'wilmion',
  name: 'wilmion',
  job: 'Frontend Developer',
  email: 'wilmion92@hotmail.com',
  image: dummyImage,
};

const dummyJobs: Job[] = [
  {
    image: dummyImage,
    nameBusinness: '',
    color: '',
    description: '',
    active: false,
    role: '',
    from: '',
    to: '',
    function1: '',
    function2: '',
    function3: '',
    function4: '',
  },
];

const dummyProjects: Project[] = [
  {
    image: dummyImage,
    name: '',
    description: '',
    linkFrontend: '',
    linkBackend: null,
    linkBlog: null,
    linkFigma: null,
    linkRepository: '',
    skills: [],
    active: false,
  },
];

const dummySkills: Skill[] = [
  {
    name: 'B',
    backgroundColor: 'CCCC',
    iconColor: 'CCC',
  },
  {
    name: 'A',
    backgroundColor: 'CCC',
    iconColor: 'CC',
  },
];

const dummyOfSocialMedia: SocialMedia[] = [
  {
    name: '',
    icon: '',
    color: '',
    active: false,
    redirectUrl: '',
  },
  {
    name: '',
    icon: '',
    color: '',
    active: false,
    redirectUrl: '',
  },
  {
    name: '',
    icon: '',
    color: '',
    active: false,
    redirectUrl: '',
  },
  {
    name: '',
    icon: '',
    color: '',
    active: false,
    redirectUrl: '',
  },
];

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GET Requests', () => {
    it('All stats', () => {
      const dummy: GraphicStat[] = [
        {
          title: 'RAW',
          raw: [],
        },
        {
          title: 'RAW 1',
          raw: [],
        },
      ];

      service
        .getAllStats({
          from: '2022-05-07',
          to: '2022-05-07',
          type: 'NU',
        })
        .subscribe((data) => {
          expect(data.payload).toEqual(dummy);
          expect(data.payload.length).toBe(2);
        });

      const req = httpMock.expectOne(
        `${service.API}/api/stats?from=2022-05-07&to=2022-05-07&type=NU`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(createMock(dummy));
    });
    it('get stat by ID', () => {
      const id = '19';

      service.getStat(id).subscribe((data) => {
        expect(data.payload).toEqual(dummyStats[1]);
      });

      const req = httpMock.expectOne(`${service.API}/api/stats/${id}`);
      expect(req.request.method).toEqual('GET');
      req.flush(createMock(dummyStats[1]));
    });
    it('Get my profile', () => {
      service.getMyProfile().subscribe((data) => {
        expect(data.payload).toEqual(dummyUser);
      });

      const req = httpMock.expectOne(`${service.API}/api/users/get-my-account`);
      expect(req.request.method).toEqual('GET');
      req.flush(createMock(dummyUser));
    });
    it('Get All static Contents', () => {
      service.getAllStaticContents('10', '0').subscribe((data) => {
        expect(data.payload.length).toBe(1);
        expect(data.payload).toEqual([dummyStaticContent]);
      });

      const req = httpMock.expectOne(
        `${service.API}/api/static-contents?limit=10&offset=0`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(createMock([dummyStaticContent]));
    });
    it('Get All jobs', () => {
      service.getAllJobs().subscribe((data) => {
        expect(data.payload).toEqual(dummyJobs);
      });

      const req = httpMock.expectOne(`${service.API}/api/jobs`);
      expect(req.request.method).toEqual('GET');
      req.flush(createMock(dummyJobs));
    });
    it('Get All projects', () => {
      service.getAllProjects().subscribe((data) => {
        expect(data.payload).toEqual(dummyProjects);
        expect(data.payload.length).toBe(1);
      });

      const req = httpMock.expectOne(`${service.API}/api/projects`);
      expect(req.request.method).toEqual('GET');
      req.flush(createMock(dummyProjects));
    });
    it('Get All skills', () => {
      service.getAllSkills('10', '0').subscribe((data) => {
        expect(data.payload.length).toBe(2);
        expect(data.payload).toEqual(dummySkills);
      });

      const req = httpMock.expectOne(
        `${service.API}/api/skills?limit=10&offset=0`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(createMock(dummySkills));
    });
    it('Get All social Media', () => {
      service.getAllSocialMedia('10', '0').subscribe((data) => {
        expect(data.payload.length).toBe(4);
        expect(data.payload).toEqual(dummyOfSocialMedia);
      });

      const req = httpMock.expectOne(
        `${service.API}/api/social-media?limit=10&offset=0`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(createMock(dummyOfSocialMedia));
    });
  });

  describe('POST requests', () => {
    it('Create Image', () => {
      service.createImage([], '400x400').subscribe((image) => {
        expect(image.payload).toEqual(dummyImage);
      });

      const req = httpMock.expectOne(`${service.API}/api/images`);
      expect(req.request.method).toEqual('POST');
      req.flush(createMock(dummyImage));
    });
    it('Create Stat', () => {
      service
        .createStat({
          type: 'NU',
        })
        .subscribe((data) => expect(data.payload).toEqual(dummyStats[0]));

      const req = httpMock.expectOne(`${service.API}/api/stats`);
      expect(req.request.method).toEqual('POST');
      req.flush(createMock(dummyStats[0]));
    });
    it('Create Skill', () => {
      const dummySkill: Skill = {
        name: 'HTTP ICON',
        backgroundColor: '#FFFFFF',
        icon: 'SVG',
        iconColor: '#FFFFFF',
      };

      service.createSkill(dummySkill).subscribe((data) => {
        expect(data.payload).toEqual(dummySkill);
      });

      const req = httpMock.expectOne(`${service.API}/api/skills`);
      expect(req.request.method).toEqual('POST');
      req.flush(createMock(dummySkill));
    });
    it('Login user', () => {
      const response = {
        token: 'TOKEN',
        user: dummyUser,
      };

      service
        .login({ email: 'wilmion92@hotmail.com', password: '123456789' })
        .subscribe((data) => {
          expect(data.payload).toEqual(response);
        });

      const req = httpMock.expectOne(`${service.API}/api/users/login`);
      expect(req.request.method).toEqual('POST');
      req.flush(createMock(response));
    });
    it('Change password', () => {
      service
        .changePassword({
          oldPassword: '123456789',
          newPassword: '12345678910',
        })
        .subscribe((data) => {
          expect(data.payload).toEqual({});
        });

      const req = httpMock.expectOne(
        `${service.API}/api/users/change-password`
      );
      expect(req.request.method).toEqual('POST');
      req.flush(createMock({}));
    });
    it('Activate job with ID', () => {
      service.activateJob('1').subscribe((data) => {
        expect(data.payload).toEqual(dummyJobs[0]);
      });

      const req = httpMock.expectOne(`${service.API}/api/jobs/activate/1`);
      expect(req.request.method).toEqual('POST');
      req.flush(createMock(dummyJobs[0]));
    });
    it('Activate project with ID', () => {
      service.activateProject('1').subscribe((data) => {
        expect(data.payload).toEqual(dummyProjects[0]);
      });

      const req = httpMock.expectOne(`${service.API}/api/projects/activate/1`);
      expect(req.request.method).toEqual('POST');
      req.flush(createMock(dummyProjects[0]));
    });
    it('Create skill', () => {
      service.createSkill(dummySkills[0]).subscribe((data) => {
        expect(data.payload).toEqual(dummySkills[0]);
      });

      const req = httpMock.expectOne(`${service.API}/api/skills`);
      expect(req.request.method).toEqual('POST');
      req.flush(createMock(dummySkills[0]));
    });
  });

  describe('PATCH Resquests', () => {
    it('Update my user', () => {
      const payloadUser: Partial<User> = {
        name: 'Wilmion Navarrete',
      };

      service.updateUser(payloadUser).subscribe((data) => {
        expect(data.payload).toEqual({ ...dummyUser, ...payloadUser });
      });

      const req = httpMock.expectOne(`${service.API}/api/users`);
      expect(req.request.method).toEqual('PATCH');
      req.flush(createMock({ ...dummyUser, ...payloadUser }));
    });
    it('Update a static content with ID', () => {
      const payloadStaticPage: Partial<StaticPage> = {
        responseQuestion: 'A other simple response',
      };

      service.updateStaticContent('12', payloadStaticPage).subscribe((data) => {
        expect(data.payload).toEqual({
          ...dummyStaticContent,
          ...payloadStaticPage,
        });
      });

      const req = httpMock.expectOne(`${service.API}/api/static-contents/12`);
      expect(req.request.method).toEqual('PATCH');
      req.flush(createMock({ ...dummyStaticContent, ...payloadStaticPage }));
    });
    it('Update job', () => {
      const payloadJob: Partial<Job> = {
        nameBusinness: 'WILMION S.A.C',
      };

      service.updateJob('1', payloadJob).subscribe((data) => {
        expect(data.payload).toEqual({ ...dummyJobs[0], ...payloadJob });
      });

      const req = httpMock.expectOne(`${service.API}/api/jobs/1`);
      expect(req.request.method).toEqual('PATCH');
      req.flush(createMock({ ...dummyJobs[0], ...payloadJob }));
    });
    it('Update Project', () => {
      const payloadProject: Partial<Project> = {
        name: 'KUKS FRESH',
      };

      service.editProject('1', payloadProject).subscribe((data) => {
        expect(data.payload).toEqual({
          ...dummyProjects[0],
          ...payloadProject,
        });
      });

      const req = httpMock.expectOne(`${service.API}/api/projects/1`);
      expect(req.request.method).toEqual('PATCH');
      req.flush(createMock({ ...dummyProjects[0], ...payloadProject }));
    });
    it('Edit skill', () => {
      const payloadSkill: Partial<Skill> = {
        name: 'SKILL 2',
      };

      service.editSkill('1', payloadSkill).subscribe((data) => {
        expect(data.payload).toEqual({ ...dummySkills[0], ...payloadSkill });
      });

      const req = httpMock.expectOne(`${service.API}/api/skills/1`);
      expect(req.request.method).toEqual('PATCH');
      req.flush(createMock({ ...dummySkills[0], ...payloadSkill }));
    });
    it('Update a social media with ID', () => {
      const payload: Partial<SocialMedia> = {
        redirectUrl: 'A URI',
      };

      service.updateSocialMedia('1', payload).subscribe((data) => {
        expect(data.payload).toEqual({ ...dummyOfSocialMedia[0], ...payload });
      });

      const req = httpMock.expectOne(`${service.API}/api/social-media/1`);
      expect(req.request.method).toEqual('PATCH');
      req.flush(createMock({ ...dummyOfSocialMedia[0], ...payload }));
    });
  });

  describe('DELETE Requests', () => {
    it('deactivate Job with ID', () => {
      service.deactivateJob('1').subscribe((data) => {
        expect(data.payload).toEqual({ ...dummyJobs[0], active: false });
      });

      const req = httpMock.expectOne(`${service.API}/api/jobs/1`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(createMock({ ...dummyJobs[0], active: false }));
    });
    it('Deactivate Project', () => {
      service.deactivateProject('1').subscribe((data) => {
        expect(data.payload).toEqual({ ...dummyProjects[0], active: false });
      });

      const req = httpMock.expectOne(`${service.API}/api/projects/1`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(createMock({ ...dummyProjects[0], active: false }));
    });
    it('Delete skill', () => {
      service.deleteSkill('1').subscribe((data) => {
        expect(data.payload).toEqual({});
      });

      const req = httpMock.expectOne(`${service.API}/api/skills/1`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(createMock({}));
    });
  });

  describe('Create query', () => {
    it('Nothing', () => {
      const result = service.createQuery();

      expect(result).toBe('');
    });
    it('Only limit', () => {
      const result = service.createQuery('10', undefined);

      const expected = '?limit=10';

      expect(result).toBe(expected);
    });
    it('Only offset', () => {
      const result = service.createQuery(undefined, '0');

      const expected = '?offset=0';

      expect(result).toBe(expected);
    });
    it('Both parameters', () => {
      const result = service.createQuery('10', '0');

      const expected = '?limit=10&offset=0';

      expect(result).toBe(expected);
    });
  });
});
