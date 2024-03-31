export const useHttpExecute = <T>() => {
  const pending = ref<boolean>(false);
  const data = ref<T>();
  const error = ref();

  const getHttpOptions = useHttpOptions();

  const showErrorMsg = useHttpShowError();

  const execute = async (url: string, options?: UseHttpOptions) => {
    try {
      const httpOptions = getHttpOptions(options);
      pending.value = true;
      const result = await $fetch(url, httpOptions);
      data.value = result as any;
      return result;
    } catch (ex) {
      error.value = ex;
      if (options?.showErrorToast) {
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
