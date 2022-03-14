import { Image } from './image.model';

export interface User {
  readonly id?: string;

  readonly username: string;

  readonly name: string;

  readonly job: string;

  readonly email: string;

  readonly image: Image;
}

export interface Login {
  readonly email: string;
  readonly password: string;
}
