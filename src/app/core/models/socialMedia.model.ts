export interface SocialMedia {
  readonly id?: string;
  readonly name: string;
  readonly icon: string;
  readonly color: string;
  readonly active: boolean;
  readonly redirectUrl: string;
}
