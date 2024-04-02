<template>
  <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish">
    <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
      <th-input v-model:value="formState.username" @change="onChange" />
    </a-form-item>

    <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
      <th-input-password v-model:value="formState.password" @change="onChange" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <th-button pattern="primary" type="submit" :loading="pending">Login</th-button>
    </a-form-item>
    <a-form-item v-if="error" :wrapper-col="{ offset: 8, span: 16 }">
      <span class="text-red">{{ exceptionUtil.getMessage(error) }}</span>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { useAuth } from '@/composables/service/useAuth';

const { setAuthInfo } = useAuth();
interface FormState {
  username: string;
  password: string;
}

const formState = reactive<FormState>({
  username: '',
  password: ''
});

const { execute, pending, error } = useHttpExecute();
const router = useRouter();
const onFinish = async (values: any) => {
  try {
    // 可以2选1, 用toast，也可以显示在button下，样例是两个都实现了
    await execute('/api/login', { body: values, method: 'post', showErrorToast: false });
    setAuthInfo('token------', 'userId', 'robert', 'Robert Luo');
    router.push('/');
  } catch (ex) {
    // Do nothing
  }
};

const onChange = () => {
  error.value = '';
};
</script>
