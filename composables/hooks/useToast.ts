import { message } from 'ant-design-vue';

const historyMessageTime: {
  [msg: string]: number;
} = {};

/**
 * Check does the message show in recently. If it is showed in 2 seconds, then return true.
 * @param msg message
 */
const isDuplicateShowed = (msg: string): boolean => {
  const lastShowTime = historyMessageTime[msg] || 0;
  const now = new Date().getTime();
  historyMessageTime[msg] = lastShowTime;
  if (now - lastShowTime > 2000) {
    return false;
  }
  return true;
};

export const useToast = () => {
  const showError = (msg: string) => {
    if (!isDuplicateShowed(msg)) {
      message.error(msg);
    }
  };
  const showInfo = (msg: string) => {
    if (!isDuplicateShowed(msg)) {
      message.info(msg);
    }
  };
  const showWarning = (msg: string) => {
    if (!isDuplicateShowed(msg)) {
      message.warning(msg);
    }
  };
  const showSuccess = (msg: string) => {
    if (!isDuplicateShowed(msg)) {
      message.success(msg);
    }
  };
  const showException = (ex: any, defaultMsg?: string) => {
    // Here is logic
    const msg = ex.message || ex.statusText || defaultMsg || 'Unknown Error';
    if (!isDuplicateShowed(msg)) {
      message.error(msg);
    }
  };

  return { showError, showInfo, showWarning, showSuccess, showException };
};
