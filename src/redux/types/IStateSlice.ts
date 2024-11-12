export interface IStateSlice<T> {
  loading: boolean;
  data?: T;
  error?: string | null;
}
