import type { UseHttpOptions } from './useHttpQueryDirectly';

export const useHttpBlockExecute = <T>() => {
  const pending = ref<boolean>(false);
  const error = ref();
  const data = ref<T>();
  const { getHttpOptions, getTransform } = useHttpOptions();
  const showErrorMsg = useHttpShowError();

  const execute = async (fn: (fetch: (url: string, options?: Omit<UseHttpOptions, 'showErrorToast'>) => any) => Promise<T>, showErrorToast?: boolean): Promise<T> => {
    try {
      pending.value = true;
      const fetch = async (url: string, options?: Omit<UseHttpOptions, 'showErrorToast'>): Promise<any> => {
        const httpOptions = getHttpOptions(options);
        const resp = await $fetch(url, httpOptions);
        getTransform(resp);
        return resp;
      };
      const result = await fn(fetch);
      data.value = result;
      return result;
    } catch (ex) {
      error.value = ex;
      if (showErrorToast) {
        showErrorMsg(ex);
      }
      throw ex;
    } finally {
      pending.value = false;
    }
  };

  return {
    execute,
    pending,
    data,
    error
  };
};
