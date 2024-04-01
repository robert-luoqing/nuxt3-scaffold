export const asyncUtil = {
  wait: (ms: number) => {
    return new Promise<void>((resolve) => {
      window.setTimeout(() => {
        resolve();
      }, ms);
    });
  }
};
