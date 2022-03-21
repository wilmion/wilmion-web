import { Image } from './image.model';

export interface Skill {
  readonly id?: number;
  readonly name: string;
  readonly backgroundColor: string;
  readonly iconColor: string;
  icon?: string;
  image?: Image;
  imageId?: string;
}
