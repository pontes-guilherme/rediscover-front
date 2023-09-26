export interface CustomResponse<T> {
  data: T | T[];
  message?: string;
}
