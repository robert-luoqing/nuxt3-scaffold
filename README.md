
# env
- Node.js 20
- Yarn

# 学习资源

- https://nuxt.com.cn/docs/getting-started/assets
- https://tehub.com/course/bIpRGyDdBh
- https://nuxt.com.cn/docs/guide
- https://unocss.dev/guide/

# Icon

- https://unocss.dev/presets/icons
- https://icones.js.org/
  for example, 从https://icones.js.org/collection/material-symbols获取，要加上"i-"

```
<div class="i-material-symbols:3p-outline" />
```

# Style

由于unocss兼容tailwindcss和windicss，所以语法可以从以下两个文档里查到

- https://tailwindcss.com/
- https://windicss.org/

```
<div class="text-red-300 text-[18px]">Color</div>
<div class="text-red text-2">Color</div>
```

另外attributify-mode也可以使用，但不推荐

- https://unocss.dev/presets/attributify#attributify-mode

# Antd compoinent

- https://antdv.com/components/overview

# Fetch Data

在系统中不要直接用useFetch及$fetch

- useHttpQuery
  这个是用来做分页的，里面的execute或executeWithUrl来获取下一页的数据

```
<template>
  <div>
    <div class="w-full gap-x-4 text-4xl p-2 mt-4">
      <div><a-button @click="onClick">Next</a-button></div>
      <div>pending: {{ pending }}</div>
      <div>error: {{ error }}</div>
      <div>countries: {{ countries }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: countries, pending, error, execute } = await useHttpQuery('/api/users', { params: { pageIndex: 1 } });
const onClick = async () => {
  execute({
    params: { pageIndex: 2 } 
  });
};
</script>

```

- useHttpQueryDirectly
  这个hook封闭了useFetch, 使用方法如下

```
// template
<div>pending: {{ pending }}</div>
<div>error: {{ error }}</div>
<div>countries: {{ data }}</div>

// script
const { pending, data, error } = await useHttpQueryDirectly('/v3.1/all', { method: 'get' });
```

- useHttpExecute
  这是单个提交数据到服务器的hook, 注： 如果要通过回调绑定数据的话，单个useHttpExecute应该应用到单个请求上去, 如果复用execute的话，请用useHttpExecuteHandler

```
// template
<div>pending: {{ pending }}</div>
<div>error: {{ error }}</div>
<div>countries: {{ countries }}</div>
<div><button @click="onClick">Load Countries</button></div>

// script
const { data: countries, pending, error, execute } = useHttpExecute();
const onClick = async () => {
  const data = await execute('/v3.1/all', { method: 'get' });
  console.log('countries', data);
};
```

- useHttpExecuteHandler

```
// template
<div>pending: {{ pending }}</div>
<div>error: {{ error }}</div>
<div>countries: {{ countries }}</div>
<div><button @click="onClick">Load Countries</button></div>

// script
const countries = ref();
const pending = ref<boolean>(false);
const error = ref();
const { execute } = useHttpExecuteHandler();
const onClick = async () => {
  try {
    pending.value = true;
    const data = await execute('/v3.1/all', { method: 'get' });
    countries.value = data;
  } catch (ex) {
    error.value = ex;
  } finally {
    pending.value = false;
  }
};

```

- useHttpBlockExecute

```
<template>
  <div>
    <div>Test useHttpBlockExecute Hook</div>
    <div class="w-full gap-x-4 text-4xl p-2 mt-4">
      <div>pending: {{ pending }}</div>
      <div>error: {{ error }}</div>
      <div>countries: {{ countries }}</div>
      <div><button @click="onClick">Load Countries</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: countries, pending, error, execute } = useHttpBlockExecute();
const onClick = async () => {
  await execute(async (fetch) => {
    // write other logic code here.....
    const data1 = await fetch('/v3.1/all', { method: 'get' });
    // write other logic code here.....
    const data2 = await fetch('/v3.1/all', { method: 'get' });
    return { data1, data2 };
  });
};
</script>

```

# useMessage的用法
最好不要直接用antd的Modal.info, Modal.success, Modal.warning, Modal.error, 而是用 const { info, success, warning, error } = useMessage(); 这个可以更好的管理所有Message的样式。
- confirmSync, 这个是用于同步Confirm, 这个常用于简单的询问，询问后没有过多的复杂逻辑
```
const onOpenSyncConfirm = async () => {
  const result = await confirmSync('Do you want delete this item?', 'Delete Confirm');
  console.log('Result', result);
};
```
- confirmAsync, 这个是用于异步Confirm, 这个常用于在确认后，要运行一段逻辑，在运行逻辑过程中，button的状态为loading. 这段逻辑运行完后, confirm窗才关闭掉。
```
  const result = await confirmAsync('Do you want delete this item?', 'Delete Confirm', {
    callback: async (confirmResult:boolean) => {
      await asyncUtil.wait(3000);
    }
  });
  console.log('Result---------', result);
```

# th-button
在这个组件中有一个loading-when-click属性，即在运行click时，该button处于loading状态，当click运行完后，手动关掉该loading状态，这个可以省去了loading状态的管理
```
<th-button :loading-when-click="true" @click="onButtonLoading">Test loading</th-button>

const onButtonLoading = async ({ disableLoading }: ThButtonOptions) => {
  try {
    await asyncUtil.wait(3000);
  } finally {
    disableLoading();
  }
};
```

# 用openTHModal来简化打开modal窗口  
这个在hot reload有bug,引用https://github.com/vercel/next.js/issues/52165.
```
const onOpenModal = () => {
  openTHModal({
    component: modalComponent,
    closable: true
  });
};
```

# vueuse
推荐使用vueuse
- https://vueuse.org/functions.html

# AOS动画
- https://michalsnik.github.io/aos/
- https://github.com/michalsnik/aos?tab=readme-ov-file#api

# Library
- https://nuxt.com/modules?category=Libraries