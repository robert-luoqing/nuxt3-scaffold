export const exceptionUtil = {
  getMessage: (ex: any, defaultMsg?: string | null): string => {
    if (!ex) {
      return defaultMsg || 'Unknown Error';
    }
    ex = unref(ex);
    return ex.message || ex.statusText || ex.statusMessage || defaultMsg || 'Unknown Error';
  }
};
