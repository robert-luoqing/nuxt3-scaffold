// uno.config.ts
import { defineConfig, presetIcons, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify,
    presetUno,
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default)
      }
    })
  ]
});
