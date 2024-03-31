export const useCommit = <T>() => {
  const pending = ref<boolean>(false);
  const data = ref<T>();
  const error = ref();
  const getHttoOptions = useHttpOptions();

  const commit = async (url: string, options: UseApiOptions) => {
    try {
      const httpOptions = getHttoOptions(options);
      pending.value = true;
      const result = await $fetch(url, httpOptions);
      data.value = result as any;
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
