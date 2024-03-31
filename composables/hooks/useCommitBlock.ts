import type { UseApiOptions } from './useApi';

export const useCommitBlock = <T>() => {
  const pending = ref<boolean>(false);
  const error = ref();
  const data = ref<T>();
  const getHttoOptions = useHttpOptions();
  const commit = async (fn: (fetch: (url: string, options: UseApiOptions) => any) => Promise<T>): Promise<T> => {
    try {
      pending.value = true;
      const fetch = async (url: string, options: UseApiOptions): Promise<any> => {
        const httpOptions = getHttoOptions(options);
        const resp = await $fetch(url, httpOptions);
        return resp;
      };
      const result = await fn(fetch);
      data.value = result;
      return result;
    } catch (ex) {
      error.value = ex;
      throw ex;
    } finally {
      pending.value = false;
    }
  };

  return {
    commit,
    pending,
    data,
    error
  };
};
