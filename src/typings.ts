export type AsyncFunction<Args extends any[] = any[], Result = void> = (
  ...args: Args
) => Promise<Result>;
