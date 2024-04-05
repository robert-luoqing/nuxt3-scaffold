<template>
  <a-modal v-for="modal in modals" :key="modal.key" :open="modal.open" :width="modal.width" :footer="null" :closable="!!modal.closable" @change="() => closeModal(modal)">
    <component :is="modal.component" v-bind="modal.props"></component>
  </a-modal>
</template>
<script lang="ts">
import type { Component } from 'vue';
import { uuidUtil } from '@/utils/uuidUtil';

export interface ThModalParam {
  key?: string;
  props?: any;
  component: Component;
  width?: string | number;
  closable?: boolean;
  close?: (param?: any) => Promise<boolean | null | undefined>;
}

export interface ModalParam {
  close: (param?: any) => Promise<boolean | null | undefined>;
}

export interface THModalParam2 extends ThModalParam {
  open: boolean;
}

const subsHooks: Function[] = [];

const notify = () => {
  for (const fn of subsHooks) {
    fn();
  }
};

// 因为ref在hot reload会丢掉他的depends, 所以用subsHooks来做通知
const globalModals = ref<ThModalParam[]>([]);
export const openTHModal = (modalParam: ThModalParam) => {
  const param: ThModalParam = { ...modalParam };
  if (!param.key) {
    param.key = uuidUtil.generateUUIDWithoutDash();
  }

  param.close = async (closeParam?: any): Promise<boolean | null | undefined> => {
    let result: boolean | null | undefined = null;
    if (modalParam.close) {
      result = await modalParam.close(closeParam);
    }
    if (result !== false) {
      const newModals: ThModalParam[] = [];
      for (const modal of globalModals.value) {
        if (modal.key !== param.key) {
          newModals.push(modal);
        }
      }
      globalModals.value = newModals;
      notify();
    }

    return result;
  };

  if (!param.props) param.props = {};
  param.props.close = param.close;
  globalModals.value = [...globalModals.value, param];
  notify();
};
</script>
<script lang="ts" setup>
const modals = shallowRef<THModalParam2[]>([]);
modals.value = globalModals.value.map((item) => ({ ...item, open: true }));
const updateModals = () => {
  const newModals = globalModals.value.map((item) => {
    const newItem = toRaw(item);
    return { ...newItem, open: true };
  });
  modals.value = newModals;
};

onMounted(() => {
  subsHooks.push(updateModals);
});

onUnmounted(() => {
  const index = subsHooks.indexOf(updateModals);
  if (index >= 0) {
    subsHooks.splice(index, 1);
  }
});

// watch(globalModals, () => {
//   updateModals();
// });
const closeModal = (model: THModalParam2) => {
  model.close?.();
};
</script>
