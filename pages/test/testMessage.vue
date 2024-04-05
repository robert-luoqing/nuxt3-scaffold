<template>
  <div>
    <div>
      <th-button @click="onOpenMessage">Open Message</th-button>
    </div>
    <div>
      <th-button @click="onOpenSyncConfirm">Open Sync Confirm</th-button>
    </div>
    <div>
      <th-button @click="onOpenConfirm">Open Confirm</th-button>
    </div>
    <div>
      <th-button :loading-when-click="true" @click="onButtonLoading">Test loading</th-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ThButtonOptions } from '~/components/thButton.vue';

const { error, confirmSync, confirmAsync } = useMessage();
const onOpenMessage = () => {
  error('This is error', 'Error');
};

const onOpenSyncConfirm = async () => {
  console.log('-------start---------');
  const result = await confirmSync('Do you want delete this item?', 'Delete Confirm');
  console.log('-------result---------', result);
};
const onOpenConfirm = async () => {
  console.log('-------start---------');
  const result = await confirmAsync('Do you want delete this item?', 'Delete Confirm', {
    callback: async () => {
      await asyncUtil.wait(3000);
    }
  });
  console.log('-------result---------', result);
};
const onButtonLoading = async ({ disableLoading }: ThButtonOptions) => {
  try {
    await asyncUtil.wait(3000);
  } finally {
    disableLoading();
  }
};
</script>
