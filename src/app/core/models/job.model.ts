import { Image } from './image.model';
export interface Job {
  readonly id?: string;
  readonly image: Image;
  readonly nameBusinness: string;
  readonly color: string;
  readonly description: string;
  readonly active: boolean;
  readonly role: string;
  readonly from: Date;
  readonly to: 'Currently' | Date;
  readonly function1: string;
  readonly function2: string;
  readonly function3: string;
  readonly function4: string;
}
