export interface StaticPage {
  readonly id?: number;
  readonly introduction: string;
  readonly responseQuestion: string;
  readonly contactEmail: string | undefined;
}
