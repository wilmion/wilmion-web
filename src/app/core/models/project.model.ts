import { Image } from './image.model';
import { Skill } from './skill.model';

export interface Project {
  readonly id?: number;
  readonly image: Image;
  readonly name: string;
  readonly description: string;
  readonly linkFrontend: string;
  readonly linkBackend: string | null;
  readonly linkBlog: string | null;
  readonly linkFigma: string | null;
  readonly linkRepository: string;
  readonly skills: Skill[];
}
