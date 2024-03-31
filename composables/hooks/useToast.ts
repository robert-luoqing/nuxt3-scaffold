import { message } from 'ant-design-vue';

export const useToast = () => {
  const showError = (msg: string) => {
    message.error(msg);
  };
  const showInfo = (msg: string) => {
    message.info(msg);
  };
  const showWarning = (msg: string) => {
    message.warning(msg);
  };
  const showSuccess = (msg: string) => {
    message.success(msg);
  };

  return { showError, showInfo, showWarning, showSuccess };
};
