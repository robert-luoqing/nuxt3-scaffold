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

# Fetch Data

在系统中不要直接用useFetch及$fetch

- useApi
  这个hook封闭了useFetch, 使用方法如下

```
// template
<div>pending: {{ pending }}</div>
<div>error: {{ error }}</div>
<div>countries: {{ data }}</div>

// script
const { pending, data, error } = await useApi('/cms/front/area/influencer/countries', { method: 'get' });
```

- useCommit
  这是单个提交数据到服务器的hook, 注： 如果要通过回调绑定数据的话，单个useCommit应该应用到单个请求上去, 如果复用commit的话，请用useRawCommit

```
// template
<div>pending: {{ pending }}</div>
<div>error: {{ error }}</div>
<div>countries: {{ countries }}</div>
<div><button @click="onClick">Load Countries</button></div>

// script
const { data: countries, pending, error, commit } = useCommit();
const onClick = async () => {
  const data = await commit('/cms/front/area/influencer/countries', { method: 'get' });
  console.log('countries', data);
};
```

- useRawCommit

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
const { commit } = useCommit();
const onClick = async () => {
  try {
    pending.value = true;
    const data = await commit('/cms/front/area/influencer/countries', { method: 'get' });
    countries.value = data;
  } catch (ex) {
    error.value = ex;
  } finally {
    pending.value = false;
  }
};

```

- useCommitBlock

```
<template>
  <div>
    <div>Test useCommitBlock Hook</div>
    <div class="w-full gap-x-4 text-4xl p-2 mt-4">
      <div>pending: {{ pending }}</div>
      <div>error: {{ error }}</div>
      <div>countries: {{ countries }}</div>
      <div><button @click="onClick">Load Countries</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: countries, pending, error, commit } = useCommitBlock();
const onClick = async () => {
  await commit(async (fetch) => {
    // write other logic code here.....
    const data1 = await fetch('/cms/front/area/influencer/countries', { method: 'get' });
    // write other logic code here.....
    const data2 = await fetch('/cms/front/area/influencer/countries', { method: 'get' });
    return { data1, data2 };
  });
};
</script>

```
