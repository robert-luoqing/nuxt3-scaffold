export const useRawCommit = <T>() => {
  const getHttoOptions = useHttpOptions();

  const commit = async (url: string, options: UseApiOptions) => {
    const httpOptions = getHttoOptions(options);
    const result: T = await $fetch(url, httpOptions);
    return result;
  };

  return {
    commit
  };
};
