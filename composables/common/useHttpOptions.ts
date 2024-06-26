import { useAuth } from '@/composables/service/useAuth';

export const useHttpOptions = () => {
  const config = useRuntimeConfig();
  const apiHost = config.public.apiHost;
  const httpTimeout = config.public.httpTimeout;
  const { getToken } = useAuth();

  const getTransform = (value: any) => {
    if (value) {
      if (typeof value === 'string') {
        value = JSON.parse(value);
      }
    }

    // 这里是用于处理和服务器级定的错误信息
    // if (value?.status !== 200) {
    //   throw createError({ statusCode: value?.status, statusText: value?.message || 'Unknown Server Error' });
    // }

    return value;
  };

  const getHttpOptions = (options?: UseHttpOptions): any => {
    return {
      ...(options || {}),
      baseURL: apiHost,
      timeout: httpTimeout || 30000,
      headers: {
        Accept: 'application/json',
        Authentication: getToken()
      },
      transform: getTransform
    };
  };

  return { getHttpOptions, getTransform };
};
