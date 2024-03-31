export interface UseApiOptions {
  method: 'get' | 'post' | 'delete' | 'put';
  params?: Record<string, any>;
  body?: RequestInit['body'] | Record<string, any>;
}

export const useApi = (url: string, options?: UseApiOptions) => {
  const getHttoOptions = useHttpOptions();
  const httpOptions = getHttoOptions(options);
  const result = useFetch(url, httpOptions);
  return result;
};
