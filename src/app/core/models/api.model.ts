export interface IAPI<T> {
  message: string;
  payload: T;
  status: number;
}
