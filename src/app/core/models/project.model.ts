export interface Project {
  readonly image: string;
  readonly name: string;
  readonly description: string;
  readonly link_frontend: string | null;
  readonly link_backend: string | null;
  readonly link_blog: string | null;
  readonly link_figma: string | null;
  readonly link_repository: string;
  readonly skills: string[];
}
