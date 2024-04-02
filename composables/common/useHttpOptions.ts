export const useHttpOptions = () => {
  const config = useRuntimeConfig();
  const apiHost = config.public.apiHost;
  const httpTimeout = config.public.httpTimeout;
  const token = useCookie('token');

  const getHttpOptions = (options?: UseHttpOptions): any => {
    return {
      ...(options || {}),
      baseURL: apiHost,
      timeout: httpTimeout || 30000,
      headers: {
        Accept: 'application/json',
        token: token.value
      },
      transform: (value: any) => {
        if (value) {
          if (typeof value === 'string') {
            value = JSON.parse(value);
          }
        }

        // 这里是用于处理和服务器级定的错误信息
        // if (value?.status !== 200) {
        // throw createError({ statusCode: value?.status, statusText: value?.message || 'Unknown error' });
        // }

        return value;
      }
    };
  };

  return getHttpOptions;
};
