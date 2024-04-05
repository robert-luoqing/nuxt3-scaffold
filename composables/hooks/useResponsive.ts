export const useResponsive = () => {
  const windowSize = useWindowSize();
  // https://tailwindcss.com/docs/responsive-design
  const result = ref<'mo' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>();
  const setResultByWindowSize = () => {
    const width = windowSize.width.value;
    if (width >= 1536) {
      result.value = '2xl';
    } else if (width >= 1280) {
      result.value = 'xl';
    } else if (width >= 1024) {
      result.value = 'lg';
    } else if (width >= 768) {
      result.value = 'md';
    } else if (width >= 640) {
      result.value = 'sm';
    } else {
      result.value = 'mo';
    }
  };
  watch([windowSize.width], () => {
    setResultByWindowSize();
  });
  setResultByWindowSize();
  return result;
};
