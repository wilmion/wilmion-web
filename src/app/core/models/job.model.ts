export interface Job {
  readonly imageUrl: string;
  readonly name_business: string;
  readonly color: string;
  readonly description: string;
  readonly active: boolean;
  readonly role: string;
  readonly from: Date;
  readonly to: 'Currenty' | Date;
  readonly function_1: string;
  readonly function_2: string;
  readonly function_3: string;
  readonly function_4: string;
  readonly linkedIn_url: string;
}
