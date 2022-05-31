export interface Text {
  readonly id: string;
  link: string;
  color: string;
  style: 'solid' | 'underline' | 'bold' | 'none';
  content: string;
  line: 'next' | 'line';
}
