export const useHttpHandler = <T>() => {
  const { getHttpOptions, getTransform } = useHttpOptions();
  const showErrorMsg = useHttpShowError();
  const execute = async (url: string, options?: UseHttpOptions) => {
    try {
      const httpOptions = getHttpOptions(options);
      const result: T = await $fetch(url, httpOptions);
      getTransform(result);
      return result;
    } catch (ex) {
      if (options?.showErrorToast) {
        showErrorMsg(ex);
      }
      throw ex;
    }
  };

  return execute;
};
