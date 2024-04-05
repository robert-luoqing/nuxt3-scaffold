import type { VNode } from 'vue';

export const useMessage = () => {
  const showMessage = async (func: any, content: string, title?: string) => {
    return new Promise<void>((resolve) => {
      func({
        title,
        content: h('div', { style: { padding: '20px 0' } }, content),
        onOk() {
          resolve();
        },
        onCancel() {
          resolve();
        }
      });
    });
  };
  const info = async (content: string, title?: string) => {
    await showMessage(Modal.info, content, title);
  };
  const success = async (content: string, title?: string) => {
    await showMessage(Modal.success, content, title);
  };

  const error = async (content: string, title?: string) => {
    await showMessage(Modal.error, content, title);
  };

  const warning = async (content: string, title?: string) => {
    await showMessage(Modal.warning, content, title);
  };

  const confirmSync = async (
    content: string,
    title: string | null | undefined,
    options?: {
      okText?: string;
      cancelText?: string;
      icon?: VNode;
    }
  ): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      Modal.confirm({
        title,
        icon: options?.icon,
        content: h('div', { style: { padding: '20px 0' } }, content),
        okText: options?.okText || 'OK',
        cancelText: options?.cancelText || 'Cancel',
        onOk() {
          resolve(true);
        },
        onCancel() {
          resolve(false);
        }
      });
    });
  };

  const confirmAsync = async (
    content: string,
    title: string | null | undefined,
    options?: {
      okText?: string;
      cancelText?: string;
      icon?: VNode;
      callback?: (result: boolean) => Promise<void>;
    }
  ): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      Modal.confirm({
        title,
        icon: options?.icon,
        content: h('div', { style: { padding: '20px 0' } }, content),
        okText: options?.okText || 'OK',
        cancelText: options?.cancelText || 'Cancel',
        onOk: async () => {
          await options?.callback?.(true);
          resolve(true);
        },
        onCancel: async () => {
          await options?.callback?.(true);
          resolve(false);
        }
      });
    });
  };

  return { info, success, error, warning, confirmSync, confirmAsync };
};
