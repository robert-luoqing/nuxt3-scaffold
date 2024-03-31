export interface UseHttpOptions {
  method?: 'get' | 'post' | 'delete' | 'put';
  params?: Record<string, any>;
  body?: RequestInit['body'] | Record<string, any>;
  key?: string;
  /**
   * 当有error时是否显示ErrMessage
   */
  showErrorToast?: boolean;
}

export const useHttpShowError = () => {
  const { showError } = useToast();
  const lastShowTime = ref(0);

  const showErrorMsg = (error: any) => {
    if (error.value) {
      const currentTime = new Date().getTime();
      if (currentTime - lastShowTime.value > 1000) {
        showError(error?.message || error?.statusMessage || 'Failed to post data to server');
      }
      lastShowTime.value = currentTime;
    }
  };

  return showErrorMsg;
};

export const useHttpQueryDirectly = async (url: string, options?: UseHttpOptions) => {
  const getHttpOptions = useHttpOptions();
  const httpOptions = getHttpOptions(options);

  const result = useFetch(url, httpOptions);

  const showErrorMsg = useHttpShowError();
  if (options?.showErrorToast && process.client) {
    watch(result.error, () => {
      showErrorMsg(result.error.value);
    });
    showErrorMsg(result.error.value);
  }

  return result;
};
