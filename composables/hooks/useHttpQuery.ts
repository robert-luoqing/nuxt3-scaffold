export const useHttpQuery = async <T>(url: string, options?: UseHttpOptions) => {
  const { getHttpOptions, getTransform } = useHttpOptions();

  const lastOptions = ref(options);

  const { data, pending, error, refresh } = await useAsyncData<T>(options?.key || url, () => {
    const httpOptions = getHttpOptions(options);
    return $fetch(url, httpOptions);
  });

  const execute = async (options?: UseHttpOptions) => {
    try {
      lastOptions.value = options;
      pending.value = true;
      const httpOptions = getHttpOptions(options);
      const result: any = await $fetch(url, httpOptions);
      getTransform(result);
      data.value = result;
      return result;
    } catch (ex: any) {
      error.value = ex;
      throw ex;
    } finally {
      pending.value = false;
    }
  };
  const executeWithUrl = async (newUrl: string, options?: UseHttpOptions) => {
    try {
      lastOptions.value = options;
      pending.value = true;
      const httpOptions = getHttpOptions(options);
      const result: any = await $fetch(newUrl, httpOptions);
      getTransform(result);
      data.value = result;
      return result;
    } catch (ex: any) {
      error.value = ex;
      throw ex;
    } finally {
      pending.value = false;
    }
  };

  const showErrorMsg = useHttpShowError();
  const handleShowError = () => {
    if (lastOptions.value?.showErrorToast) {
      showErrorMsg(error.value);
    }
  };
  if (process.client) {
    watch(error, () => {
      handleShowError();
    });
    handleShowError();
  }

  return { data, pending, error, refresh, execute, executeWithUrl };
};
