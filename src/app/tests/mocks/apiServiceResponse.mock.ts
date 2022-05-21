import { ApiService } from '@core/services/api/api.service';

import { User } from '@models/user.model';
import { Image } from '@models/image.model';

import { initialStateTest } from './initialState';

import { of } from 'rxjs';

const user: User = {
  username: 'wilmion',
  name: 'wilbert',
  job: 'front end',
  email: 'wilmion21@gmail.com',
  image: initialStateTest.skills[3].image as Image,
};

export function setMockApiService(apiService: ApiService) {
  spyOn(apiService, 'getMyProfile').and.returnValue(
    of({
      message: 'Success',
      payload: user,
      status: 200,
    })
  );

  spyOn(apiService, 'createStat').and.returnValue(
    of({
      message: 'Created...',
      payload: {
        id: '15',
        createdAt: '5-21-2022',
        type: 'NU',
        post: null,
      },
      status: 201,
    })
  );

  spyOn(apiService, 'getAuthorImage').and.returnValue(
    of({
      message: 'Image',
      payload: 'https://wilmion.com/api/cdn/image.png',
      status: 200,
    })
  );
}
