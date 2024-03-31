export const useHttpOptions = () => {
  const config = useRuntimeConfig();
  const apiHost = config.public.apiHost;
  const httpTimeout = config.public.httpTimeout;
  const token = useCookie('token');

  const getHttoOptions = (options?: UseApiOptions): any => {
    return {
      ...(options || {}),
      baseURL: apiHost,
      timeout: httpTimeout || 30000,
      headers: {
        Accept: 'application/json',
        token: token.value
      }
    };
  };

  return getHttoOptions;
};
