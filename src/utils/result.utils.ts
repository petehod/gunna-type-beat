export type SuccessResult<T> = {
  success: true;
  value: T;
};

export type ErrorResult<E> = {
  success: false;
  error: E;
};

export const createSuccess = <T>(value: T): SuccessResult<T> => ({
  success: true,
  value,
});

export const createError = <E>(error: E): ErrorResult<E> => ({
  success: false,
  error,
});

export type Result<T, E> = SuccessResult<T> | ErrorResult<E>;

export type AsyncResult<T, E> = Promise<Result<T, E>>;
