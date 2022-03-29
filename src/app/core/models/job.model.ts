import { Image } from './image.model';
export interface Job {
  readonly id?: string;
  readonly image: Image;
  readonly nameBusinness: string;
  readonly color: string;
  readonly description: string;
  readonly active: boolean;
  readonly role: string;
  readonly from: string;
  readonly to: 'Currently' | string;
  readonly function1: string;
  readonly function2: string;
  readonly function3: string;
  readonly function4: string;
  readonly imageId?: string;
}
