import { Image } from './image.model';
import { Skill } from './skill.model';

export interface Project {
  readonly id?: string;
  image: Image;
  name: string;
  description: string;
  linkFrontend: string;
  linkBackend: string | null;
  linkBlog: string | null;
  linkFigma: string | null;
  linkRepository: string;
  skills: Skill[];
  active: boolean;
  imageId?: string;
  skillsIds?: string[];
}
