import type { UseHttpOptions } from './useHttpQueryDirectly';

export const useHttpBlockHandler = <T>() => {
  const { getHttpOptions, getTransform } = useHttpOptions();
  const showErrorMsg = useHttpShowError();

  const execute = async (fn: (fetch: (url: string, options?: Omit<UseHttpOptions, 'showErrorToast'>) => any) => Promise<T>, showErrorToast?: boolean): Promise<T> => {
    try {
      const fetch = async (url: string, options?: Omit<UseHttpOptions, 'showErrorToast'>): Promise<any> => {
        const httpOptions = getHttpOptions(options);
        const resp = await $fetch(url, httpOptions);
        getTransform(resp);
        return resp;
      };
      const result = await fn(fetch);

      return result;
    } catch (ex) {
      if (showErrorToast) {
        showErrorMsg(ex);
      }
      throw ex;
    }
  };

  return execute;
};
