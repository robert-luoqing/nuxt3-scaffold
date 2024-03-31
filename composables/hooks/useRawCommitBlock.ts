import type { UseApiOptions } from './useApi';

export const useRawCommitBlock = <T>() => {
  const getHttoOptions = useHttpOptions();
  const commit = async (fn: (fetch: (url: string, options: UseApiOptions) => any) => Promise<T>): Promise<T> => {
    const fetch = async (url: string, options: UseApiOptions): Promise<any> => {
      const httpOptions = getHttoOptions(options);
      const resp = await $fetch(url, httpOptions);
      return resp;
    };
    const result = await fn(fetch);

    return result;
  };

  return {
    commit
  };
};
